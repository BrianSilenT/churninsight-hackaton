package churnInsightApplication.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PrediccionResponse {

    private String prevision;
    private Double probabilidad;

}
