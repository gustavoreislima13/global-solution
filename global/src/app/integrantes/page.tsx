import React from 'react';
import ju from "@/img/julia.jpg"
import gu from "@/img/gustavo.png"
import leo from "@/img/leo.png"

const Integrantes = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Integrantes</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>Na Porto Seguro, acreditamos nas pessoas que fazem acontecer!</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/path/to/gustavo.jpg" alt="Gustavo Lima" style={{ width: '150px', height: '150px', borderRadius: '10px', objectFit: 'cover', marginBottom: '0.5rem' }} />
          <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Gustavo Lima</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a href="https://github.com/gustavolima" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/github-icon.png" alt="GitHub" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://linkedin.com/in/gustavolima" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/linkedin-icon.png" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/path/to/leo.jpg" alt="Leo" style={{ width: '150px', height: '150px', borderRadius: '10px', objectFit: 'cover', marginBottom: '0.5rem' }} />
          <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Leo</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a href="https://github.com/leo" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/github-icon.png" alt="GitHub" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://linkedin.com/in/leo" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/linkedin-icon.png" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="/path/to/julia.jpg" alt="Julia" style={{ width: '150px', height: '150px', borderRadius: '10px', objectFit: 'cover', marginBottom: '0.5rem' }} />
          <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Julia</p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a href="https://github.com/julia" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/github-icon.png" alt="GitHub" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://linkedin.com/in/julia" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/linkedin-icon.png" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrantes;
