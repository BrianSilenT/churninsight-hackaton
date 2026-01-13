package churnInsightApplication.controller;

import churnInsightApplication.dto.ClientData;
import churnInsightApplication.service.ClientService;
import ai.onnxruntime.OrtException;
import churnInsightApplication.service.PredictionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/predict")
public class PredictionController {

    private final PredictionService predictionService;
    private final ClientService clientService;

    public PredictionController(PredictionService predictionService, ClientService clientService) {
        this.predictionService = predictionService;
        this.clientService = clientService;
    }

    @GetMapping("/{dni}")
    public ResponseEntity<Map<String, Object>> predictByDni(@PathVariable String dni) throws OrtException {
        // Obtener cliente desde ClientService
        ClientData client = clientService.getClientByDni(dni);
        client.calculateDerived(); // calcula supportUrgency y monthlySpend

        // Ejecutar predicción con ONNX
        float probability = predictionService.predict(client);

        // Interpretar resultado
        String prevision = (probability >= 0.5f) ? "Va a cancelar" : "Va a continuar";

        // Armar respuesta en formato hackatón
        Map<String, Object> response = new HashMap<>();
        response.put("prevision", prevision);
        response.put("probabilidad", probability);

        return ResponseEntity.ok(response);
    }
}