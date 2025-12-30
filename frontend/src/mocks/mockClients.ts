import type { ClientData } from "../types/client";

export const mockClients: { [key: string]: ClientData } = {
  "12345678": {
    dni: "12345678",
    nombreUsuario: "María González",
    tiempoContrato: "24 meses",
    retrasosPagos: 2,
    usoApp: "Alto (85%)",
    planType: "Premium",
    vaCancelar: false,
    probabilidad: 23,
  },
  "87654321": {
    dni: "87654321",
    nombreUsuario: "Carlos Ramírez",
    tiempoContrato: "6 meses",
    retrasosPagos: 5,
    usoApp: "Bajo (15%)",
    planType: "Básico",
    vaCancelar: true,
    probabilidad: 87,
  },
  "45678912": {
    dni: "45678912",
    nombreUsuario: "Ana Martínez",
    tiempoContrato: "18 meses",
    retrasosPagos: 0,
    usoApp: "Medio (60%)",
    planType: "Estándar",
    vaCancelar: false,
    probabilidad: 12,
  },
  "78912345": {
    dni: "78912345",
    nombreUsuario: "Luis Fernández",
    tiempoContrato: "3 meses",
    retrasosPagos: 3,
    usoApp: "Muy bajo (5%)",
    planType: "Básico",
    vaCancelar: true,
    probabilidad: 92,
  },
};
