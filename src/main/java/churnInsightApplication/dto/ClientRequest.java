package churnInsightApplication.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ClientRequest {
    @NotNull
    private Integer tiempo_contrato_meses;

    @NotNull
    private Integer retrasos_pago;

    @NotNull
    private Double uso_mensual;

    @NotNull
    private String plan;

}
