package churnInsightApplication.service;

import churnInsightApplication.dto.ClientData;
import ai.onnxruntime.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import jakarta.annotation.PreDestroy;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class PredictionService {

    private final OrtEnvironment env;
    private final OrtSession session;

    public PredictionService(@Value("${model.onnx.path}") String modelPath) throws OrtException {
        this.env = OrtEnvironment.getEnvironment();
        // Cargamos la sesión una sola vez al instanciar el servicio
        this.session = env.createSession(modelPath, new OrtSession.SessionOptions());
        System.out.println("✅ Modelo ONNX cargado exitosamente desde: " + modelPath);
    }

    public float predict(ClientData client) throws OrtException {
        // Preparación del vector de entrada (11 features)
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

        try (OnnxTensor inputTensor = OnnxTensor.createTensor(env, new float[][] { features })) {
            try (OrtSession.Result result = session.run(Collections.singletonMap("float_input", inputTensor))) {

                // El índice 1 contiene las probabilidades.
                // En ONNX Runtime, esto devuelve una lista de OnnxValue.
                List<?> outputList = (List<?>) result.get(1).getValue();

                // Extraemos el primer elemento (para nuestra única fila de datos)
                // El objeto es un OnnxMap, debemos tratarlo como tal.
                ai.onnxruntime.OnnxMap onnxMap = (ai.onnxruntime.OnnxMap) outputList.get(0);

                // Convertimos el OnnxMap a un Map de Java real
                @SuppressWarnings("unchecked")
                Map<Long, Float> probabilities = (Map<Long, Float>) onnxMap.getValue();

                // Obtenemos la probabilidad de la clase 1 (Churn)
                float probChurn = probabilities.get(1L);

                System.out.println("✅ Inferencia exitosa. Probabilidad: " + probChurn);
                return probChurn;
            }
        }
    }

    @PreDestroy
    public void close() throws OrtException {
        // Cerrar recursos al apagar la app
        session.close();
        env.close();
    }
}