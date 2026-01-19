import { Search, Moon, Sun, RotateCcw } from "lucide-react";
import { useState } from "react";
import { usePrediction } from "./hooks/usePrediction";
import { useStats } from "./hooks/useStats";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [typedId, setTypedId] = useState("");
  const [searchId, setSearchId] = useState<string | null>(null);

  const { data: prediction, isLoading, isError } = usePrediction(searchId ?? undefined);
  const { data: stats } = useStats();

  const handleSearch = () => {
    if (!typedId.trim()) return;
    setSearchId(typedId.trim());
  };

  const handleReset = () => {
    setTypedId("");
    setSearchId(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-gray-900 text-gray-100" : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900"
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Header */}
        <div className={`p-6 rounded-lg shadow-lg mb-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex items-center justify-between">
            <h1 className={`text-lg font-semibold ${darkMode ? "text-blue-400" : "text-blue-700"}`}>
              ChurnInsight: Predicción de Cancelaciones en servicios y suscripciones
            </h1>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>

        {/* Sección de búsqueda */}
        <div className={`p-6 rounded-lg shadow-lg mb-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <label className="block mb-2 text-sm font-medium">Consultar ID de Cliente</label>
          <div className="flex gap-3">
            <input
              type="text"
              value={typedId}
              onChange={(e) => setTypedId(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ejemplo: 1, 5, 100..."
              className={`flex-1 px-4 py-3 rounded-lg border ${
                darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
              }`}
            />
            <button onClick={handleSearch} 
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
              }`}
              style={{ cursor: 'pointer', userSelect: 'none' }}
              >
              <Search size={20} /> Buscar
            </button>
            <button onClick={handleReset} 
             className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
                darkMode
                  ? "bg-gray-600 hover:bg-gray-700 text-gray-100"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
              style={{ cursor: 'pointer', userSelect: 'none' }}>
              <RotateCcw size={20} /> Limpiar
            </button>
          </div>
          {isError && <p className="mt-3 text-red-500">❌ No se encontró el ID o ingreso de ID inválido.</p>}
          {isLoading && <p className="mt-3 text-blue-500 animate-pulse">⚙️ Consultando modelo ONNX...</p>}
        </div>


        {/* Información del Cliente y Predicción */}
        {prediction && (
          <>
            <div className={`p-6 rounded-lg shadow-lg mb-6 overflow-x-auto ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <h2 className={`text-xl font-bold mb-4 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>Información del Cliente</h2>
              <table className="w-full">
                <thead>
                  <tr className={`border-b-2 ${darkMode? "border-gray-700": "border-gray-100"}`}>
                    <th className="px-4 py-3 text-left">ID</th>
                    <th className="px-4 py-3 text-left">Nombre</th>
                    <th className="px-4 py-3 text-left">Tipo de Plan</th>
                    <th className="px-4 py-3 text-left">Tiempo de Contrato (meses)</th>
                    <th className="px-4 py-3 text-left">Retrasos en Pagos (días)</th>
                  </tr>
                </thead>
                <tbody>
                    <td className={`px-4 py-4  ${
                      darkMode ? "text-gray-200" : "text-gray-900"
                    }`}>{prediction.cliente.id}</td>
                    <td className={`px-4 py-4  ${
                      darkMode ? "text-gray-200" : "text-gray-900"
                    }`}>{prediction.cliente.nombre}</td>
                    <td className={`px-4 py-4 ${
                      darkMode ? "text-gray-200" : "text-gray-900"
                    }`}>{prediction.cliente.plan}</td>
                    <td className={`px-4 py-4 ${
                      darkMode ? "text-gray-200" : "text-gray-900"
                    }`}> {prediction.cliente.tiempoContrato}{" "} {prediction.cliente.tiempoContrato === 1 ? "mes" : "meses"}</td>
                   <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full ${
                        prediction.cliente.retrasosPagos > 20
                          ? "bg-red-100 text-red-700"
                          : prediction.cliente.retrasosPagos > 7
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                      }`}
                    >
                      {prediction.cliente.retrasosPagos}
                    </span>
                  </td>
                </tbody>
              </table>
            </div>

            <div
              className={`p-6 rounded-lg shadow-lg mb-6 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`mb-3 text-lg font-bold ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Predicción de Cancelación
              </h3>

              <div
                className={`p-4 rounded-lg border-2 ${
                  prediction.analisis.resultado === "Va a cancelar"
                    ? darkMode
                      ? "bg-red-900/20 border-red-500"
                      : "bg-red-50 border-red-300"
                    : darkMode
                      ? "bg-green-900/20 border-green-500"
                      : "bg-green-50 border-green-300"
                }`}
              >
                <p
                  className={`text-lg ${
                    prediction.analisis.resultado === "Va a cancelar"
                      ? darkMode
                        ? "text-red-300"
                        : "text-red-800"
                      : darkMode
                        ? "text-green-300"
                        : "text-green-800"
                  }`}
                >
                  El <strong>{prediction.cliente.nombre}</strong>, {" "}
                  <strong>
                    {prediction.analisis.resultado.toLowerCase()}
                  </strong>
                  , con una probabilidad de riesgo:{" "}
                  <strong>
                    {(prediction.analisis.probabilidad * 100).toFixed(1)}%
                  </strong>
                </p>

              </div>
            </div>
          </>
        )}

        {/* Stats Footer */}
        <div
          className={`p-6 rounded-lg shadow-lg ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className={`mb-4 ${ darkMode ? "text-gray-200" : "text-gray-800"}`}>
            Estadísticas Generales:
          </h2>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
            <strong>Total evaluados:</strong> {stats?.total_clientes_dataset ?? 0}
          </p>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
            <strong>Precisión General:</strong>{" "}
            {(stats?.precision_modelo ? stats.precision_modelo * 100 : 0).toFixed(1)}%
          </p>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>
            <strong>Capacidad de Detección de Cancelaciones:</strong>{" "}
            {(stats?.recall_churn ? stats.recall_churn * 100 : 0).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}