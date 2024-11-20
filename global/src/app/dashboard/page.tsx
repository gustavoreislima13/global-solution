"use client";

import React, { useEffect } from 'react';
import Clientes from "../cliente/page";
import Produtos from "../produltos/page";

const Dashboard: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{
      padding: '50px 10%',
      backgroundColor: '#fff'  // Fundo alterado para branco
    }}>
     

      <section style={{
        padding: '100px 10%',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        marginBottom: '50px'
      }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>
          Gerenciamento de <span style={{ color: '#008000' }}>Clientes</span> {/* Alterado para verde */}
        </h2>
        <Clientes />
      </section>

      <section style={{
        padding: '100px 10%',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px'
      }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>
          Gerenciamento de <span style={{ color: '#008000' }}>Produtos</span> {/* Alterado para verde */}
        </h2>
        <Produtos />
      </section>
    </div>
  );
};

export default Dashboard;