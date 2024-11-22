import '@/app/globals.css';

export default function Relatorio(){
    return(
        <div className="bg-gray-100 min-h-screen p-8">
    <h1 className="text-2xl font-bold text-gray-700 mb-6">Relatórios</h1>
    
    <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-700">Relatório Mensal de Consumo</h2>
        <p className="text-sm text-gray-500 mt-2">
        Este relatório apresenta o consumo total de energia dos dispositivos cadastrados no último mês.
        </p>
        <div className="mt-4">
        <p className="text-gray-700 font-semibold">Consumo Total:</p>
        <p className="text-2xl font-bold text-green-700">1250 kWh</p>
        </div>
    </div>

    <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-700">Dispositivos com Maior Consumo</h2>
        <p className="text-sm text-gray-500 mt-2">
        Lista dos dispositivos que mais consumiram energia no período analisado.
        </p>
        <ul className="mt-4 space-y-2">
        <li className="text-gray-700">
            <span className="font-semibold">Ar-Condicionado:</span> 450 kWh
        </li>
        <li className="text-gray-700">
            <span className="font-semibold">Geladeira:</span> 300 kWh
        </li>
        <li className="text-gray-700">
            <span className="font-semibold">Máquina de Lavar:</span> 200 kWh
        </li>
        </ul>
    </div>

    <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-700">Economia Energética</h2>
        <p className="text-sm text-gray-500 mt-2">
        Comparativo entre o consumo de energia deste mês e o mês anterior.
        </p>
        <div className="mt-4">
        <p className="text-gray-700 font-semibold">Economia:</p>
        <p className="text-2xl font-bold text-green-700">15%</p>
        </div>
    </div>
</div>

    )
}