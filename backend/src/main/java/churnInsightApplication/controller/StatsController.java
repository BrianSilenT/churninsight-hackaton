package churnInsightApplication.controller;

import churnInsightApplication.service.ClientService; // 1. Importar el servicio
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class StatsController {

    private final ClientService clientService;

    // Inyectar el servicio mediante el constructor
    public StatsController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping("/stats")
    public Map<String, Object> getStats() {
        // Obtener la lista real cargada del CSV
        int total = clientService.getAllClients().size();

        return Map.of(
                "total_clientes_dataset", total,
                "precision_modelo", 0.7826,
                "recall_churn", 0.8954,
                "f1_score_churn", 0.80,
                "estado_modelo", "Optimizado (Sin Payment Delay)");
    }
}