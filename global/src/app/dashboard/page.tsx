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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-700">Clientes Cadastrados</h3>
                <p className="text-4xl font-extrabold text-green-700 mt-4">120</p>
            </div>
          
            <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-700">Metas Energeticas atingidas</h3>
                <p className="text-4xl font-extrabold text-green-700 mt-4">50%</p>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-700">Economia Energética</h3>
                <p className="text-4xl font-extrabold text-green-700 mt-4">45%</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-700">
            Economia de energia gerada com base nos dispositivos.
          </h3>
          <a
            href="/"
            className="mt-4 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
          >
            Calcular Consumo
          </a>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-700">
            Relatórios de dispositivos eletrônicos.
          </h3>
          <a
            href='/relatorio'
            className="mt-4 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
          >
            Ver Relatórios
          </a>
        </div>
      </div>


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
        <ul className="text-2xl leading-relaxed text-gray-800 space-y-4">
          <li>
            Este mês, notamos que o consumo de energia aumentou em <strong>12%</strong>. Avalie o uso dos equipamentos e veja se há possibilidade de reduzir o consumo em horários de pico.
          </li>
          <li>
            <strong>Otimize o uso de aparelhos de grande consumo</strong>: ar-condicionado e máquinas industriais. Configure horários específicos para operação e mantenha a manutenção regular.
          </li>
          <li>
            Utilize luzes de <span className="text-green-600 font-semibold">LED</span> em vez de lâmpadas fluorescentes ou incandescentes. Essa troca pode reduzir o consumo de iluminação em até <strong>75%</strong>.
          </li>
          <li>
            <strong>Automatize processos energéticos</strong>: Invista em sensores de presença para áreas comuns, desligando luzes automaticamente quando não utilizadas.
          </li>
          <li>
            Realize <span className="text-green-600">treinamentos para a equipe</span> sobre práticas conscientes no uso de energia, reforçando a importância de desligar equipamentos fora de uso.
          </li>
          <li>
            Aproveite <strong>energia natural</strong>: Avalie a instalação de painéis solares para áreas administrativas. Isso pode reduzir a dependência da rede elétrica e trazer benefícios fiscais.
          </li>
          <li>
            Verifique os dispositivos cadastrados no sistema e desative os que não estão sendo utilizados. Uma análise dos dispositivos inativos pode ajudar a cortar custos desnecessários.
          </li>
          <li>
            Acompanhe os relatórios de consumo mensal no sistema para identificar tendências e agir rapidamente em caso de aumento inesperado no gasto.
          </li>
          <li>
            Planeje a substituição de equipamentos antigos por modelos com <strong>selo Procel A</strong>, que são mais eficientes e sustentáveis.
          </li>
        </ul>
      </section>

    </div>
  );
}
