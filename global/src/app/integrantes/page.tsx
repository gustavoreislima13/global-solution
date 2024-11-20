'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import ju from '@/img/julia.jpg';
import gu from '@/img/gustavo.png';
import leo from '@/img/leo.png';
import git from '@/img/git (1).png';
import link from '@/img/link (1).png';

interface Integrante {
  nome: string;
  imagem: string;
  github: string;
  linkedin: string;
}

const Integrantes: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const integrantes: Integrante[] = [
    {
      nome: 'Gustavo Lima',
      imagem: gu,
      github: 'https://github.com/gustavolima',
      linkedin: 'https://linkedin.com/in/gustavolima',
    },
    {
      nome: 'Leo',
      imagem: leo,
      github: 'https://github.com/leo',
      linkedin: 'https://linkedin.com/in/leo',
    },
    {
      nome: 'Julia',
      imagem: ju,
      github: 'https://github.com/julia',
      linkedin: 'https://linkedin.com/in/julia',
    },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#fff' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Integrantes</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>Nosso compromisso é com a transparência e a sustentabilidade.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {integrantes.map((integrante, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image
              src={integrante.imagem}
              alt={integrante.nome}
              style={{ maxWidth: '2000px', width: '150px', height: '150px', borderRadius: '10px', objectFit: 'cover', marginBottom: '0.5rem' }}
            />
            <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{integrante.nome}</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a href={integrante.github} target="_blank" rel="noopener noreferrer">
                <Image src={git} alt="GitHub" style={{ width: '24px', height: '24px' }} />
              </a>
              <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer">
                <Image src={link} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrantes;