'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import ju from '@/img/julia.jpg';
import gu from '@/img/gustavo.png';
import leo from '@/img/leo.png';
import git from '@/img/git (1).png';
import link from '@/img/link (1).png';
import '@/app/globals.css';

interface Integrante {
  nome: string;
  imagem: string;
  github: string;
  linkedin: string;
}

export default function Integrantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const integrantes: Integrante[] = [
    {
      nome: 'Gustavo  (RM555672)',
      imagem: gu,
      github: 'https://github.com/gustavolima',
      linkedin: 'https://linkedin.com/in/gustavolima',
    },
    {
      nome: 'Leo (RM556857)',
      imagem: leo,
      github: 'https://github.com/leo',
      linkedin: 'https://linkedin.com/in/leo',
    },
    {
      nome: 'Julia (RM558831)',
      imagem: ju,
      github: 'https://github.com/julia',
      linkedin: 'https://linkedin.com/in/julia',
    },
  ];

  return (
    <div className="text-center p-8 bg-white">
      <h1 className="text-3xl font-bold mb-4">Integrantes</h1>
      <p className="text-lg text-gray-600 mb-8">Nosso compromisso é com a transparência e a sustentabilidade.</p>
      <div className="flex justify-center gap-8 flex-wrap">
        {integrantes.map((integrante, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={integrante.imagem}
              alt={integrante.nome}
              className="w-36 h-36 rounded-lg object-cover mb-2"
            />
            <p className="text-lg font-bold">{integrante.nome}</p>
            <div className="flex gap-4 mt-2">
              <a href={integrante.github} target="_blank" rel="noopener noreferrer">
                <Image src={git} alt="GitHub" className="w-6 h-6" />
              </a>
              <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer">
                <Image src={link} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
