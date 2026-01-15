package churnInsightApplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientData {
    private Integer age;
    private Integer gender;
    private Integer tenure;
    private Integer usageFrequency;
    private Integer supportCalls;
    private Integer paymentDelay;
    private Integer subscriptionType;
    private Integer contractLength;
    private Double totalSpend;
    private Integer lastInteraction;
    private Double supportUrgency;
    private Double monthlySpend;

    public void calculateDerived() {
        if (tenure != null && supportCalls != null) {
            this.supportUrgency = supportCalls / (double) (tenure + 1);
        }
        if (tenure != null && totalSpend != null) {
            this.monthlySpend = totalSpend / (double) (tenure + 1);
        }
    }
}