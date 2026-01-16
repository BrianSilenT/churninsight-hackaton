package churnInsightApplication.service;

import churnInsightApplication.dto.ClientData;
import ai.onnxruntime.*;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class PredictionService {

    private OrtEnvironment env;
    private OrtSession session;

    @PostConstruct
    public void init() throws OrtException, IOException {
        env = OrtEnvironment.getEnvironment();
        // Cargar el modelo desde el classpath
        ClassPathResource resource = new ClassPathResource("modelo_churn_final.onnx");
        session = env.createSession(resource.getFile().getAbsolutePath(), new OrtSession.SessionOptions());
        System.out.println("✅ Modelo ONNX cargado exitosamente desde resources");
    }

    public float predict(ClientData client) throws OrtException {
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
                client.getSupportUrgency().floatValue(),
                client.getMonthlySpend().floatValue()
        };

        try (OnnxTensor inputTensor = OnnxTensor.createTensor(env, new float[][]{features})) {
            try (OrtSession.Result result = session.run(Collections.singletonMap("float_input", inputTensor))) {
                List<?> outputList = (List<?>) result.get(1).getValue();
                ai.onnxruntime.OnnxMap onnxMap = (ai.onnxruntime.OnnxMap) outputList.get(0);

                @SuppressWarnings("unchecked")
                Map<Long, Float> probabilities = (Map<Long, Float>) onnxMap.getValue();

                float probChurn = probabilities.get(1L);
                System.out.println("✅ Inferencia exitosa. Probabilidad: " + probChurn);
                return probChurn;
            }
        }
    }

    @PreDestroy
    public void close() throws OrtException {
        session.close();
        env.close();
    }
}