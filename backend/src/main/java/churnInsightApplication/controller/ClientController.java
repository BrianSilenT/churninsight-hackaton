package churnInsightApplication.controller;

import churnInsightApplication.dto.ClientData;
import churnInsightApplication.service.ClientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    // Listar todos los clientes
    @GetMapping
    public ResponseEntity<List<ClientData>> getClients() {
        List<ClientData> clients = clientService.getAllClients();
        return ResponseEntity.ok(clients);
    }

    // Obtener un cliente por ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getClientById(@PathVariable String id) {
        ClientData client = clientService.getClientById(id);
        if (client == null) {
            return ResponseEntity.status(404).body(
                    Map.of("error", "Cliente con ID " + id + " no encontrado")
            );
        }
        return ResponseEntity.ok(client);
    }
}