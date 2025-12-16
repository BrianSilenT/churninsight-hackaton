package ChurnInsightApplication.service;


import ChurnInsightApplication.dto.ClientRequest;
import ChurnInsightApplication.dto.PrediccionResponse;
import org.springframework.stereotype.Service;

@Service
public class PredictionService {

    public PrediccionResponse predecir (ClientRequest request) {
        // temporal siempre devuelve a a continuar con la probabilñidad de 0.5
        return new PrediccionResponse("Va a continuar", 0.5);
    }
}
