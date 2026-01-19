import type { PredictionResponse } from "../schemas/prediction.schema";

export const mockPredictions: Record<string, PredictionResponse> = {
  "12345678": {
    cliente: {
      id: "12345678",
      nombre: "Juan Perez",
      tiempoContrato: 12,
      retrasosPagos: 2,
      usoApp: 15,
      plan: "Standard",
    },
    analisis: {
      resultado: "Va a continuar",
      probabilidad: 23.0,
    },
  },

  "87654321": {
    cliente: {
      id: "87654321",
      nombre: "Maria Lopez",
      tiempoContrato: 1,
      retrasosPagos: 5,
      usoApp: 5,
      plan: "Basic",
    },
    analisis: {
      resultado: "Va a cancelar",
      probabilidad: 87.5,
    },
  },

  "45678912": {
    cliente: {
      id: "45678912",
      nombre: "Carlos Ramirez",
      tiempoContrato: 12,
      retrasosPagos: 0,
      usoApp: 25,
      plan: "Premium",
    },
    analisis: {
      resultado: "Va a continuar",
      probabilidad: 12.0,
    },
  },

  "78912345": {
    cliente: {
      id: "78912345",
      nombre: "Rosa Gutierrez",
      tiempoContrato: 0,
      retrasosPagos: 3,
      usoApp: 2,
      plan: "Basic",
    },
    analisis: {
      resultado: "Va a cancelar",
      probabilidad: 92.0,
    },
  },

  "78914345": {
    cliente: {
      id: "78914345",
      nombre: "Luis Fernandez",
      tiempoContrato: 3,
      retrasosPagos: 3,
      usoApp: 10,
      plan: "Standard",
    },
    analisis: {
      resultado: "Va a continuar",
      probabilidad: 3.0,
    },
  },

  "78911345": {
    cliente: {
      id: "78911345",
      nombre: "Elena Morales",
      tiempoContrato: 3,
      retrasosPagos: 6,
      usoApp: 1,
      plan: "Premium",
    },
    analisis: {
      resultado: "Va a cancelar",
      probabilidad: 85.0,
    },
  },

  "78919345": {
    cliente: {
      id: "78919345",
      nombre: "Pedro Castillo",
      tiempoContrato: 1,
      retrasosPagos: 3,
      usoApp: 12,
      plan: "Standard",
    },
    analisis: {
      resultado: "Va a cancelar",
      probabilidad: 45.0,
    },
  },

  "72912345": {
    cliente: {
      id: "72912345",
      nombre: "Ana Torres",
      tiempoContrato: 12,
      retrasosPagos: 3,
      usoApp: 8,
      plan: "Standard",
    },
    analisis: {
      resultado: "Va a cancelar",
      probabilidad: 56.0,
    },
  },
};