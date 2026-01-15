package churnInsightApplication.controller;

import churnInsightApplication.dto.ClientData;
import churnInsightApplication.service.ClientService;
import ai.onnxruntime.OrtException;
import churnInsightApplication.service.PredictionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/predict")
public class PredictionController {

    private final PredictionService predictionService;
    private final ClientService clientService;

    public PredictionController(PredictionService predictionService, ClientService clientService) {
        this.predictionService = predictionService;
        this.clientService = clientService;
    }

    @GetMapping("/client/{id}")
    public ResponseEntity<Map<String, Object>> getFullAnalysis(@PathVariable String id) throws OrtException {
        // Buscamos al cliente en el CSV (vía ClientService)
        ClientData client = clientService.getClientById(id);

        // Calculamos la predicción (vía PredictionService)
        float probability = predictionService.predict(client);
        String prevision = (probability >= 0.5f) ? "Va a cancelar" : "Va a continuar";

        // Construimos la respuesta "híbrida" para el Frontend
        Map<String, Object> response = new HashMap<>();

        // Sección: Información del Cliente
        Map<String, Object> infoCliente = new HashMap<>();
        infoCliente.put("id", id);
        infoCliente.put("nombre", "Usuario " + id);
        infoCliente.put("tiempoContrato", client.getContractLength());
        infoCliente.put("retrasosPagos", client.getPaymentDelay());
        infoCliente.put("usoApp", client.getUsageFrequency());
        infoCliente.put("plan", client.getSubscriptionType() == 3 ? "Premium"
                : client.getSubscriptionType() == 2 ? "Standard" : "Basic");

        // Sección: Predicción
        Map<String, Object> prediccion = new HashMap<>();
        prediccion.put("probabilidad", (Math.round(probability * 100.0) / 100.0));
        prediccion.put("resultado", prevision);

        response.put("cliente", infoCliente);
        response.put("analisis", prediccion);

        return ResponseEntity.ok(response);
    }
}