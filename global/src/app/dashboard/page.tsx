"use client";

import React, { useState } from 'react';
import Clientes from "../cliente/page";
import Produtos from "../produltos/page";

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
    <div style={{
      padding: '50px 10%',
      backgroundColor: '#fff'
    }}>
      <section style={{
        padding: '100px 10%',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        marginBottom: '50px'
      }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>
          Gerenciamento de <span style={{ color: '#008000' }}>Clientes</span>
        </h2>
        <Clientes />
      </section>

      <section style={{
        padding: '100px 10%',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        marginBottom: '50px'
      }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>
          Gerenciamento de <span style={{ color: '#008000' }}>Produtos</span>
        </h2>
        <Produtos />
      </section>

      {/* Formulário de Cálculo de Consumo de Energia */}
      <section style={{
        padding: '100px 10%',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        marginBottom: '50px'
      }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>
          Verifique o gasto de energia dos seus <span style={{ color: '#008000' }}>eletrodomésticos</span>
        </h2>
        <div>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Potência do aparelho (Watts)
            <input 
              type="number" 
              value={potencia} 
              onChange={(e) => setPotencia(e.target.value)} 
              style={{ width: '100%', padding: '10px', marginBottom: '20px', fontSize: '1.2rem' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Horas de uso por dia
            <input 
              type="number" 
              value={horasUso} 
              onChange={(e) => setHorasUso(e.target.value)} 
              style={{ width: '100%', padding: '10px', marginBottom: '20px', fontSize: '1.2rem' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Dias de uso durante o mês
            <input 
              type="number" 
              value={diasUso} 
              onChange={(e) => setDiasUso(e.target.value)} 
              style={{ width: '100%', padding: '10px', marginBottom: '20px', fontSize: '1.2rem' }}
            />
          </label>
          <button 
            onClick={calcularConsumo}
            style={{
              backgroundColor: '#008000', 
              color: '#fff', 
              padding: '15px 30px', 
              fontSize: '1.2rem', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer'
            }}
          >
            Calcular
          </button>

          {gasto !== 0 && (
            <div style={{
              marginTop: '30px',
              padding: '20px',
              backgroundColor: '#e0e0e0',
              borderRadius: '10px',
              fontSize: '1.5rem'
            }}>
              <p>Gasto estimado: {gasto.toFixed(2)} kWh</p>
              <p>Custo estimado: R$ {custo.toFixed(2)}</p>
            </div>
          )}
        </div>
      </section>

      {/* Dicas para Economizar Energia */}
      <section style={{
        padding: '100px 10%',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        marginBottom: '50px'
      }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>
          Dicas para <span style={{ color: '#008000' }}>Reduzir o Gasto Energético</span>
        </h2>
        <ul style={{ fontSize: '1.5rem', lineHeight: '1.6', color: '#333' }}>
          <li>Desligue os aparelhos eletrônicos da tomada quando não estiverem em uso, evitando o consumo em modo stand-by.</li>
          <li>Substitua lâmpadas incandescentes por lâmpadas LED, que são mais eficientes e duram mais.</li>
          <li>Evite deixar portas e janelas abertas ao utilizar o ar-condicionado para evitar perda de energia.</li>
          <li>Use eletrodomésticos como máquina de lavar e ferro de passar roupas em horários de tarifa reduzida, se possível.</li>
          <li>Desligue as luzes ao sair dos ambientes e aproveite ao máximo a luz natural.</li>
          <li>Utilize eletrodomésticos com selo de eficiência energética, que garantem um consumo menor.</li>
          <li>Mantenha geladeiras e freezers em locais ventilados e evite deixá-los próximos ao fogão ou em áreas muito quentes.</li>
          <li>Regule o termostato da geladeira de acordo com a temperatura recomendada pelo fabricante.</li>
        </ul>
      </section>
    </div>
  );
}
