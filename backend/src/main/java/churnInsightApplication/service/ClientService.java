package churnInsightApplication.service;

import churnInsightApplication.dto.ClientData;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    public List<ClientData> getAllClients() {
        return List.of(
                new ClientData("12345678", "Juan", "Pérez", "Premium", 12, 2, 14.5),
                new ClientData("87654321", "María", "López", "Básico", 6, 0, 8.2)
        );
    }

    public ClientData getClientByDni(String dni) {
        return new ClientData(dni, "Carlos", "Ramírez", "Estándar", 24, 1, 12.0);
    }
}
