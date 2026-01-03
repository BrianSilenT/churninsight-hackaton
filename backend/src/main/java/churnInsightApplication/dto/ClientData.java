package churnInsightApplication.dto;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientData {
    private String dni;
    private String nombre;
    private String apellido;
    private String plan;
    private Integer tiempoContratoMeses;
    private Integer retrasosPago;
    private Double usoMensual;
}
