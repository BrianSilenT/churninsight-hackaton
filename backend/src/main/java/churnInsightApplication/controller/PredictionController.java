package churnInsightApplication.controller;


import churnInsightApplication.dto.ClientRequest;
import churnInsightApplication.dto.PrediccionResponse;
import churnInsightApplication.service.PredictionService;
import jakarta.validation.Valid;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class PredictionController {

    private static final org.slf4j.Logger log =  LoggerFactory.getLogger(PredictionController.class);

    @Autowired
    private PredictionService predictionService;

    @PostMapping("/predict")
    public PrediccionResponse predict(@Valid @RequestBody ClientRequest request){
        log.info("POST /predict recibido para cliente con plan={} y retrasos={}",
                request.getPlan(), request.getRetrasos_pago());
        return predictionService.predecir(request);
    }
}
