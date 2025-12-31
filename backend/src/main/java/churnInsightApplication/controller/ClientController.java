package churnInsightApplication.controller;

import churnInsightApplication.dto.ClientData;
import churnInsightApplication.service.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientService clientService;

    // Constructor injection (Spring lo hace automáticamente)
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public List<ClientData> getClients() {
        return clientService.getAllClients();
    }

    @GetMapping("/{dni}")
    public ClientData getClientByDni(@PathVariable String dni) {
        return clientService.getClientByDni(dni);
    }
}