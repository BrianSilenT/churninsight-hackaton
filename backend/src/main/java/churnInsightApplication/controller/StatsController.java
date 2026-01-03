package churnInsightApplication.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class StatsController {

    @GetMapping("/stats")
    public Map<String, Object> getStats() {
        return Map.of(
                "totalClientes", 2,
                "tasaChurn", 0.5
        );
    }
}