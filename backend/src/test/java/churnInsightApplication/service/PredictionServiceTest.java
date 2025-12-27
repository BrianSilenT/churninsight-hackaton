package churnInsightApplication.service;

import churnInsightApplication.dto.ClientRequest;
import churnInsightApplication.dto.PrediccionResponse;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;



public class PredictionServiceTest {

    @Test
    void testPredecir() {
        PredictionService service = new PredictionService();
        ClientRequest request = new ClientRequest();

        PrediccionResponse response = service.predecir(request);

        assertEquals("Va a continuar", response.getPrevision());
        assertEquals(0.5, response.getProbabilidad());
    }

}
