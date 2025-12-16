package ChurnInsightApplication.controller;


import ChurnInsightApplication.dto.ClientRequest;
import ChurnInsightApplication.dto.PrediccionResponse;
import ChurnInsightApplication.service.PredictionService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PredictionController {

    @Autowired
    private PredictionService predictionService;

    @PostMapping
    public PrediccionResponse predict(@Valid @RequestBody ClientRequest request){
        return predictionService.predecir(request);
    }
}
