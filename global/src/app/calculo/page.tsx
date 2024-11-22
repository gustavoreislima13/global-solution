'use client';
    import '@/app/globals.css';
    import { useState } from 'react';

    export default function Calculo() {
    const [potencia, setPotencia] = useState('');
    const [horasUso, setHorasUso] = useState('');
    const [diasUso, setDiasUso] = useState('');
    const [gasto, setGasto] = useState(0);
    const [custo, setCusto] = useState(0);
    const [gastoDia, setGastoDia] = useState(0); // Novo estado para o consumo diário
    const [custoDia, setCustoDia] = useState(0); // Novo estado para o custo diário

    const calcularConsumo = () => {
        const precoKwh = 0.656;
        const consumo = (Number(potencia) * Number(horasUso) * Number(diasUso)) / 1000;
        const custoTotal = consumo * precoKwh;
        setGasto(consumo);
        setCusto(custoTotal);
    };

    const calcularConsumoDia = () => {
        const precoKwh = 0.656;
        const consumoDiario = (Number(potencia) * Number(horasUso)) / 1000; // Consumo apenas do dia
        const custoDiario = consumoDiario * precoKwh;
        setGastoDia(consumoDiario);
        setCustoDia(custoDiario);
    };

    return (
        <div>
        {/* Formulário de Cálculo de Consumo de Energia */}
        <section className="p-24 bg-gray-200 shadow-md rounded-2xl mb-12">
            <h2 className="text-5xl font-bold mb-5 text-black">
            Verifique o gasto mensal de <span className="text-green-600">eletrodomésticos</span>
            </h2>
            <div>
            <label className="block mb-2">
                Potência do aparelho (Watts)
                <input 
                type="number" 
                value={potencia} 
                onChange={(e) => setPotencia(e.target.value)} 
                className="w-full p-3 mb-5 text-lg border border-gray-300 rounded-lg"
                placeholder="Digite a potência do aparelho"
                />
            </label>
            <label className="block mb-2">
                Horas de uso por dia
                <input 
                type="number" 
                value={horasUso} 
                onChange={(e) => setHorasUso(e.target.value)} 
                className="w-full p-3 mb-5 text-lg border border-gray-300 rounded-lg"
                placeholder="Digite as horas de uso"
                />
            </label>
            <label className="block mb-2">
                Dias de uso durante o mês
                <input 
                type="number" 
                value={diasUso} 
                onChange={(e) => setDiasUso(e.target.value)} 
                className="w-full p-3 mb-5 text-lg border border-gray-300 rounded-lg"
                placeholder="Digite os dias de uso"
                />
            </label>
            <button 
                onClick={calcularConsumo}
                className="bg-green-600 text-white p-4 text-lg rounded-lg hover:bg-green-700"
            >
                Calcular (Mensal)
            </button>

            {gasto !== 0 && (
                <div className="mt-8 p-5 bg-gray-300 rounded-lg text-lg">
                <p>Gasto estimado mensal: {gasto.toFixed(2)} kWh</p>
                <p>Custo estimado mensal: R$ {custo.toFixed(2)}</p>
                </div>
            )}
            </div>
        </section>

        {/* Novo formulário para o Cálculo de Consumo Diário */}
        <section className="p-24 bg-gray-200 shadow-md rounded-2xl mb-12">
            <h2 className="text-5xl font-bold mb-5 text-black">
            Verifique o gasto diário de <span className="text-green-600">eletrodomésticos</span>
            </h2>
            <div>
            <label className="block mb-2">
                Potência do aparelho (Watts)
                <input 
                type="number" 
                value={potencia} 
                onChange={(e) => setPotencia(e.target.value)} 
                className="w-full p-3 mb-5 text-lg border border-gray-300 rounded-lg"
                placeholder="Digite a potência do aparelho"
                />
            </label>
            <label className="block mb-2">
                Horas de uso por dia
                <input 
                type="number" 
                value={horasUso} 
                onChange={(e) => setHorasUso(e.target.value)} 
                className="w-full p-3 mb-5 text-lg border border-gray-300 rounded-lg"
                placeholder="Digite as horas de uso"
                />
            </label>
            <button 
                onClick={calcularConsumoDia}
                className="bg-green-600 text-white p-4 text-lg rounded-lg hover:bg-green-700"
            >
                Calcular (Diário)
            </button>

            {gastoDia !== 0 && (
                <div className="mt-8 p-5 bg-gray-300 rounded-lg text-lg">
                <p>Gasto estimado diário: {gastoDia.toFixed(2)} kWh</p>
                <p>Custo estimado diário: R$ {custoDia.toFixed(2)}</p>
                </div>
            )}
            </div>
        </section>
        </div>
    );
    }
