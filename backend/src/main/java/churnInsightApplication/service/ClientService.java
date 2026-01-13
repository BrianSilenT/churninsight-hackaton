package churnInsightApplication.service;

import churnInsightApplication.dto.ClientData;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    public List<ClientData> getAllClients() {
        ClientData c1 = new ClientData(30, 1, 12, 10, 2, 0, 3, 12, 1200.0, 5, null, null);
        c1.calculateDerived();

        ClientData c2 = new ClientData(25, 0, 6, 8, 0, 0, 1, 1, 500.0, 10, null, null);
        c2.calculateDerived();

        return List.of(c1, c2);
    }

    public ClientData getClientByDni(String dni) {
        if (dni.equals("12345678")) {
            ClientData c1 = new ClientData(30, 1, 12, 10, 2, 0, 3, 12, 1200.0, 5, null, null);
            c1.calculateDerived();
            return c1;
        } else if (dni.equals("87654321")) {
            ClientData c2 = new ClientData(25, 0, 6, 8, 0, 0, 1, 1, 500.0, 10, null, null);
            c2.calculateDerived();
            return c2;
        }
        throw new RuntimeException("Cliente no encontrado");
    }
}
