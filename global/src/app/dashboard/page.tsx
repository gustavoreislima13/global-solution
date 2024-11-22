'use client';

import React, { useState } from 'react';
import Clientes from "../cliente/page";
import Produtos from "../produltos/page";
import '@/app/globals.css';

export default function Exemplo() {
  const [potencia, setPotencia] = useState('');
  const [horasUso, setHorasUso] = useState('');
  const [diasUso, setDiasUso] = useState('');
  const [gasto, setGasto] = useState(0);
  const [custo, setCusto] = useState(0);

  const calcularConsumo = () => {
    const precoKwh = 0.656;
    const consumo = (Number(potencia) * Number(horasUso) * Number(diasUso)) / 1000;
    const custoTotal = consumo * precoKwh;
    setGasto(consumo);
    setCusto(custoTotal);
  };

  return (
    <div className="p-12 bg-white">
      <section className="p-24 bg-gray-100 shadow-md rounded-2xl mb-12">
        <h2 className="text-5xl font-bold mb-5 text-black">
          Gerenciamento de <span className="text-green-600">Clientes</span>
        </h2>
        <Clientes />
      </section>

      <section className="p-24 bg-gray-100 shadow-md rounded-2xl mb-12">
        <h2 className="text-5xl font-bold mb-5 text-black">
          Gerenciamento de <span className="text-green-600">Produtos</span>
        </h2>
        <Produtos />
      </section>

      {/* Formulário de Cálculo de Consumo de Energia */}
      <section className="p-24 bg-gray-200 shadow-md rounded-2xl mb-12">
        <h2 className="text-5xl font-bold mb-5 text-black">
          Verifique o gasto de energia dos seus <span className="text-green-600">eletrodomésticos</span>
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
            Calcular
          </button>

          {gasto !== 0 && (
            <div className="mt-8 p-5 bg-gray-300 rounded-lg text-lg">
              <p>Gasto estimado: {gasto.toFixed(2)} kWh</p>
              <p>Custo estimado: R$ {custo.toFixed(2)}</p>
            </div>
          )}
        </div>
      </section>

      {/* Dicas para Economizar Energia */}
      <section className="p-24 bg-gray-100 shadow-md rounded-2xl mb-12">
        <h2 className="text-5xl font-bold mb-5 text-black">
          Dicas para <span className="text-green-600">Reduzir o Gasto Energético</span>
        </h2>
        <ul className="text-2xl leading-relaxed text-gray-800">
          <li>Este mês, notamos que o consumo de energia aumentou em 12%. Avalie o uso dos equipamentos e veja se há possibilidade de reduzir o consumo.</li>
          <li>O ar-condicionado tem contribuído bastante para o aumento no seu consumo. Mantenha a temperatura em 24ºC e desligue-o quando não estiver em uso para economizar.</li>
          <li>A análise dos últimos meses mostra que pequenos ajustes, como apagar luzes em áreas comuns quando não utilizadas, podem reduzir a conta de energia em até 20%.</li>
        </ul>
      </section>
    </div>
  );
}
