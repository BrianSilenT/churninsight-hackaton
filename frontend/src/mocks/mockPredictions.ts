import type { PredictionResponse } from "../types/predictionResponse";

export const mockPredictions: { [key: string]: PredictionResponse } = {
  "12345678": {
    prevision: "No Churn",
    probabilidad: 23.0
  },
  "87654321": {
    prevision: "Churn",
    probabilidad: 87.5
  },
  "45678912": {
    prevision: "No Churn",
    probabilidad: 12.0
  },
  "78912345": {
    prevision: "Churn",
    probabilidad: 92.0
  },
  "78914345": {
    prevision: "No Churn",
    probabilidad: 3.0
  },
  "78911345": {
    prevision: "Churn",
    probabilidad: 85.0
  },
  "78919345": {
    prevision: "Churn",
    probabilidad: 45.0
  },
  "72912345": {
    prevision: "Churn",
    probabilidad: 56.0
  }
};