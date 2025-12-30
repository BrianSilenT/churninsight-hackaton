import { Search, Moon, Sun, RotateCcw } from "lucide-react";
import { useClientByDni } from "./hooks/useClient";
import type { ClientData } from "./types/client";
import { mockClients } from "./mocks/mockClients";
import { useState, useEffect } from "react";
import type { KeyboardEvent } from "react";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [dniInput, setDniInput] = useState("");
  const [searchDni, setSearchDni] = useState<string | null>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const [mocksActive, setMocksActive] = useState(false);


  // CONSULTA DE CLIENTE POR API si y solo si searchDni existe

  const { data: queriedClient, isLoading, error } = useClientByDni(searchDni);

  // SI API responde se utiliza ese ClientRequest, sino se usa el mock como simulación

  const clientData = (queriedClient ?? (searchAttempted && !isLoading && error ? mockClients[dniInput] ?? null : null)) as ClientData | null;

  // Escucha eventos del mock service worker para saber si está activo

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).__MSW_ACTIVE) {
      setMocksActive(true);
      return;
    }

    function onStarted() {
      setMocksActive(true);
    }
    function onFailed() {
      setMocksActive(false);
    }
    window.addEventListener("msw:started", onStarted);
    window.addEventListener("msw:failed", onFailed);
    return () => {
      window.removeEventListener("msw:started", onStarted);
      window.removeEventListener("msw:failed", onFailed);
    };
  }, []);

  const handleSearch = () => {
    setSearchAttempted(true);
    setSearchDni(dniInput);
  };

  const handleReset = () => {
    setDniInput("");
    setSearchDni(null);
    setSearchAttempted(false);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const totalEvaluados = Object.keys(mockClients).length;
  const tasaCancelacion = (
    Object.values(mockClients).filter((c) => c.vaCancelar)
      .length / totalEvaluados
  ).toFixed(2);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className={`p-6 rounded-lg shadow-lg mb-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className={`text-lg font-semibold ${darkMode ? "text-blue-400" : "text-blue-700"}`}>
                Cancelaciones en servicios y suscripciones
              </h1>
              {import.meta.env.DEV && (
                <span
                  className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${mocksActive
                  ? darkMode
                    ? "bg-green-900 text-green-200"
                    : "bg-green-100 text-green-800"
                  : darkMode
                    ? "bg-yellow-900 text-yellow-200"
                    : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {mocksActive ? "Mocks ON" : "¡Mock. Inicializando...!"}
                </span>
              )}
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full transition-all ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                  : "bg-white hover:bg-gray-50 text-gray-700 shadow-md"
              }`}
              aria-label="Cambiar tema"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>

        {/* sección de búsqueda */}
        <div
          className={`p-6 rounded-lg shadow-lg mb-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <label
            htmlFor="dni-input"
            className={`block mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Consultar usuario por DNI
          </label>
          <div className="flex gap-3">
            <input
              id="dni-input"
              type="text"
              value={dniInput}
              onChange={(e) => setDniInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ingrese el DNI del cliente"
              className={`flex-1 px-4 py-3 rounded-lg border transition-colors ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              }`}
            />
            <button
              onClick={handleSearch}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
              }`}
            >
              <Search size={20} />
              Buscar
            </button>
            <button
              onClick={handleReset}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
                darkMode
                  ? "bg-gray-600 hover:bg-gray-700 text-gray-100"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              <RotateCcw size={20} />
              Limpiar
            </button>
          </div>
          {searchAttempted && !clientData && (
            <p className="mt-3 text-red-500">
              No se encontró ningún cliente con el DNI
              ingresado. Prueba con un usuario que exista
            </p>
          )}
        </div>

        {/* Sección de tabla de resultados*/}
        {clientData && (
          <div
            className={`p-6 rounded-lg shadow-lg mb-6 overflow-x-auto ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`mb-4 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Información del Cliente
            </h2>
            <table className="w-full">
              <thead>
                <tr
                  className={`border-b-2 ${
                    darkMode
                      ? "border-gray-700"
                      : "border-gray-200"
                  }`}
                >
                  <th
                    className={`px-4 py-3 text-left ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    DNI
                  </th>
                  <th
                    className={`px-4 py-3 text-left ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    Nombre Usuario
                  </th>
                  <th
                    className={`px-4 py-3 text-left ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    Tiempo Contrato
                  </th>
                  <th
                    className={`px-4 py-3 text-left ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    Retrasos en Pagos
                  </th>
                  <th
                    className={`px-4 py-3 text-left ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    Uso de App
                  </th>
                  <th
                    className={`px-4 py-3 text-left ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    Tipo de Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`border-b ${
                    darkMode
                      ? "border-gray-700"
                      : "border-gray-100"
                  }`}
                >
                  <td
                    className={`px-4 py-4 ${
                      darkMode
                        ? "text-gray-200"
                        : "text-gray-900"
                    }`}
                  >
                    {clientData.dni}
                  </td>
                  <td
                    className={`px-4 py-4 ${
                      darkMode
                        ? "text-gray-200"
                        : "text-gray-900"
                    }`}
                  >
                    {clientData.nombreUsuario}
                  </td>
                  <td
                    className={`px-4 py-4 ${
                      darkMode
                        ? "text-gray-200"
                        : "text-gray-900"
                    }`}
                  >
                    {clientData.tiempoContrato}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full ${
                        clientData.retrasosPagos > 3
                          ? "bg-red-100 text-red-700"
                          : clientData.retrasosPagos > 0
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                      }`}
                    >
                      {clientData.retrasosPagos}
                    </span>
                  </td>
                  <td
                    className={`px-4 py-4 ${
                      darkMode
                        ? "text-gray-200"
                        : "text-gray-900"
                    }`}
                  >
                    {clientData.usoApp}
                  </td>
                  <td
                    className={`px-4 py-4 ${
                      darkMode
                        ? "text-gray-200"
                        : "text-gray-900"
                    }`}
                  >
                    {clientData.planType}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Resultados de predicción */}
        {clientData && (
          <div
            className={`p-6 rounded-lg shadow-lg mb-6 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3
              className={`mb-3 ${
                darkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Predicción de Cancelación
            </h3>
            <div
              className={`p-4 rounded-lg border-2 ${
                clientData.vaCancelar
                  ? darkMode
                    ? "bg-red-900/20 border-red-500"
                    : "bg-red-50 border-red-300"
                  : darkMode
                    ? "bg-green-900/20 border-green-500"
                    : "bg-green-50 border-green-300"
              }`}
            >
              <p
                className={`${
                  clientData.vaCancelar
                    ? darkMode
                      ? "text-red-300"
                      : "text-red-800"
                    : darkMode
                      ? "text-green-300"
                      : "text-green-800"
                }`}
              >
                Nombre de usuario:{" "}
                <strong>{clientData.nombreUsuario}</strong>,
                DNI: <strong>{clientData.dni}</strong>,{" "}
                <strong>
                  {clientData.vaCancelar
                    ? "va a cancelar"
                    : "no va a cancelar"}
                </strong>
                , probabilidad:{" "}
                <strong>{clientData.probabilidad}%</strong>
              </p>
            </div>
          </div>
        )}

        {/* Estadísticas*/}
        <div
          className={`p-6 rounded-lg shadow-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <p
            className={`${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Total evaluados: <strong>{totalEvaluados}</strong>,
            tasa de cancelación:{" "}
            <strong>{tasaCancelacion}</strong>
          </p>
        </div>

        {/* Helper Text */}
        {!clientData && !searchAttempted && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              darkMode
                ? "bg-blue-900/20 border border-blue-500/30"
                : "bg-blue-50 border border-blue-200"
            }`}
          >
            <p
              className={`${
                darkMode ? "text-blue-300" : "text-blue-700"
              }`}
            >
              💡 Prueba buscando con estos DNIs de ejemplo:
              12345678, 87654321, 45678912, o 78912345
            </p>
          </div>
        )}
      </div>
    </div>
  );
}