package churnInsightApplication.service;

import churnInsightApplication.dto.ClientData;
import ai.onnxruntime.*;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class PredictionService {

    private final OrtEnvironment env;
    private OrtSession session;
    private final String modelPath;

    public PredictionService(@Value("${model.onnx.path}") String modelPath) {
        this.env = OrtEnvironment.getEnvironment();
        this.modelPath = modelPath;
    }

    private void initSession() throws OrtException {
        if (session == null) {
            session = env.createSession(modelPath);
        }
    }

    public float predict(ClientData client) throws OrtException {
        initSession();

        float[] features = {
                client.getAge().floatValue(),
                client.getGender().floatValue(),
                client.getTenure().floatValue(),
                client.getUsageFrequency().floatValue(),
                client.getSupportCalls().floatValue(),
                client.getSubscriptionType().floatValue(),
                client.getContractLength().floatValue(),
                client.getTotalSpend().floatValue(),
                client.getLastInteraction().floatValue(),
                (float)(client.getSupportCalls() / (client.getTenure() + 1.0)),
                (float)(client.getTotalSpend() / (client.getTenure() + 1.0))
        };

        OnnxTensor inputTensor = OnnxTensor.createTensor(env, new float[][]{features});

        try (OrtSession.Result result = session.run(
                java.util.Collections.singletonMap("float_input", inputTensor))) {

            // 👇 Aquí agregas la línea de debug
            Object rawOutput = result.get(0).getValue();
            System.out.println("Salida ONNX: " + rawOutput.getClass());

            // Si quieres ver valores concretos:
            if (rawOutput instanceof float[][]) {
                float[][] output = (float[][]) rawOutput;
                System.out.println("Valores: " + java.util.Arrays.toString(output[0]));
                return output[0][0]; // o output[0][1] si es probabilidad de churn
            } else if (rawOutput instanceof float[]) {
                float[] output = (float[]) rawOutput;
                System.out.println("Valores: " + java.util.Arrays.toString(output));
                return output[0];
            } else if (rawOutput instanceof long[]) {
                long[] output = (long[]) rawOutput;
                System.out.println("Valores: " + java.util.Arrays.toString(output));
                return (float) output[0];
            } else {
                throw new RuntimeException("Tipo de salida inesperado: " + rawOutput.getClass());
            }
        }
    }
}