package churnInsightApplication.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

    @Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientRequest {
    @NotNull(message = "El campo 'tiempo_contrato_meses' es obligatorio")
    @Min(value = 1, message = "El contrato debe ser al menos un mes")
    @JsonProperty("tiempo_contrato_meses")
    private Integer tiempo_contrato_meses;

    @NotNull(message = "El campo 'retrasos_pago' es obligatorio")
    @Min(value = 0, message = "Los retrasos de pago no pueden ser negativos")
    @JsonProperty("retrasos_pago")
    private Integer retrasos_pago;

    @NotNull(message = "El campo 'uso_mensual' es obligatorio")
    @DecimalMin(value = "0.0", inclusive = false, message = "El uso mensual debe ser mayor a 0")
    @JsonProperty("uso_mensual")
    private Double uso_mensual;

    @NotBlank(message = "El campo 'plan' es obligatorio")
    @JsonProperty("plan")
    private String plan;
}
