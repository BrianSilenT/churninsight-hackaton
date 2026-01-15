package churnInsightApplication.service;

import churnInsightApplication.dto.ClientData;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ClientService {

    private final Map<String, ClientData> repository = new HashMap<>();

    @PostConstruct
    public void init() {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(
                getClass().getResourceAsStream("/customer_churn_dataset.csv"), StandardCharsets.UTF_8))) {

            List<String> lines = br.lines().skip(1).collect(Collectors.toList());

            for (String line : lines) {
                String[] v = line.split(",");

                ClientData client = new ClientData();
                // Mapeo según el orden de tu CSV.
                String id = v[0];
                client.setAge(Integer.parseInt(v[1]));
                client.setGender(v[2].equalsIgnoreCase("Male") ? 1 : 0);
                client.setTenure(Integer.parseInt(v[3]));
                client.setUsageFrequency(Integer.parseInt(v[4]));
                client.setSupportCalls(Integer.parseInt(v[5]));
                client.setPaymentDelay(Integer.parseInt(v[6]));

                // Mapeo de Subscription Type (Basic=1, Standard=2, Premium=3)
                int subType = v[7].equalsIgnoreCase("Basic") ? 1 : v[7].equalsIgnoreCase("Standard") ? 2 : 3;
                client.setSubscriptionType(subType);

                // Mapeo de Contract Length (Monthly=1, Quarterly=3, Annual=12)
                int duration = v[8].equalsIgnoreCase("Monthly") ? 1 : v[8].equalsIgnoreCase("Quarterly") ? 3 : 12;
                client.setContractLength(duration);

                client.setTotalSpend(Double.parseDouble(v[9]));
                client.setLastInteraction(Integer.parseInt(v[10]));

                // Calculamos las variables derivadas antes de guardar
                client.calculateDerived();

                repository.put(id, client);
            }
            System.out.println("✅ Base de datos cargada: " + repository.size() + " clientes listos.");

        } catch (Exception e) {
            System.err.println("❌ Error crítico cargando el CSV: " + e.getMessage());
        }
    }

    public List<ClientData> getAllClients() {
        return List.copyOf(repository.values());
    }

    public ClientData getClientByDni(String id) {
        if (!repository.containsKey(id)) {
            throw new RuntimeException("Cliente con ID " + id + " no existe en el dataset.");
        }
        return repository.get(id);
    }
}