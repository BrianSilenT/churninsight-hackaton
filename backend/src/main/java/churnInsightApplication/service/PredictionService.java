package churnInsightApplication.service;


import churnInsightApplication.dto.ClientRequest;
import churnInsightApplication.dto.PrediccionResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class PredictionService {


    private static final Logger log = LoggerFactory.getLogger(PredictionService.class);

    public PrediccionResponse predecir(ClientRequest request) {
        log.info("Ejecutando predicción para cliente plan={} uso_mensual={}",
                request.getPlan(), request.getUso_mensual());
        // lógica mock
        return new PrediccionResponse("Va a continuar", 0.5);
    }
}