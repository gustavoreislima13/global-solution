"use client";
import '@/app/globals.css';
import React from 'react';
import Image from 'next/image';
import githubIcon from '@/img/git (1).png';
import linkedinIcon from '@/img/link (1).png';
import gustavoImg from '@/img/gustavo.png';
import leoImg from '@/img/leo.png';
import juliaImg from '@/img/julia.jpg';

const Integrantes: React.FC = () => {
  return (
    <div className="p-12 bg-white">
      <section className="flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-3 text-black text-center">Integrantes</h2>
        <p className="text-lg text-black mb-12 text-center">
          Nosso compromisso é com a transparência e a sustentabilidade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Gustavo */}
          <div className="p-5 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
            <Image src={gustavoImg} alt="Gustavo" className="w-32 h-32 rounded-full mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Gustavo (RM555672)</h3>
            <div className="flex space-x-3">
              <a href="https://github.com/gustavoreislima13" target="_blank" rel="noopener noreferrer">
                <Image src={githubIcon} alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="https://github.com/gustavoreislima13" target="_blank" rel="noopener noreferrer">
                <Image src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Card Leo */}
          <div className="p-5 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
            <Image src={leoImg} alt="Leo" className="w-32 h-32 rounded-full mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Leo (RM556857)</h3>
            <div className="flex space-x-3">
              <a href="https://github.com/LeonardoIafrate" target="_blank" rel="noopener noreferrer">
                <Image src={githubIcon} alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="https://github.com/LeonardoIafrate" target="_blank" rel="noopener noreferrer">
                <Image src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Card Julia */}
          <div className="p-5 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
            <Image src={juliaImg} alt="Julia" className="w-32 h-32 rounded-full mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Julia (RM558831)</h3>
            <div className="flex space-x-3">
              <a href="https://github.com/britojulia" target="_blank" rel="noopener noreferrer">
                <Image src={githubIcon} alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="https://github.com/britojulia" target="_blank" rel="noopener noreferrer">
                <Image src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrantes;