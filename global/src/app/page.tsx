"use client";
import '@/app/globals.css';
import React, { useEffect } from 'react';
import Image from 'next/image';
import imagem1 from "@/img/logo.png";
import redonda from "@/img/imagem_2.png";
import redonda01 from "@/img/imagem_3.png";
import { MdVerified } from "react-icons/md";

const DigitalProductDesignAgency: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-12 bg-white">
      <section className="flex flex-col md:flex-row justify-center items-center h-screen relative">

        <div className="max-w-lg text-center md:text-left relative z-10">
          <h1 className="text-5xl font-bold leading-tight text-black">
            Revolucionando <span className="text-green-600">o consumo </span>de energia!
          </h1>
          <p className="text-xl text-black mt-5">
            Com nossas ferramentas inteligentes, fornecemos insights valiosos que ajudam a reduzir custos e promover práticas ecológicas, trazendo maior controle e visibilidade sobre o uso de energia elétrica.
          </p>
          <div className="mt-5 space-x-4 flex justify-center md:justify-start">
            <button
              className="py-3 px-6 text-lg font-bold bg-green-600 text-white border-2 border-green-600 rounded-full shadow-md transition-transform transform hover:scale-105"
              onClick={() => window.location.href = "/login#"}
            >
              Cadastre-se
            </button>
            <button
              className="py-3 px-6 text-lg font-bold bg-green-600 text-white border-2 border-green-600 rounded-full shadow-md transition-transform transform hover:scale-105"
              onClick={() => window.location.href = "/login"}
            >
              Login
            </button>
          </div>
        </div>

        <div className="w-full max-w-2xl mt-50 md:mt-0 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-l from-green-800 to-white opacity-90 rounded-tl-full rounded-br-full transform scale-80 z-0"></div>
          <div className="flex justify-center items-center w-full h-full relative z-10">
            <Image src={imagem1} alt="Imagem inicial" className="w-1/2 h-auto" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <h2 className="text-4xl font-bold mb-5 text-black text-center">
          Por que escolher <span className="text-green-600">o Smart Energy?</span>
        </h2>
        <p className="text-lg text-black mb-12 text-center">
          Nosso compromisso é com a transparência e a sustentabilidade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-5 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-t-lg">
              <MdVerified className="text-green-600 w-10 h-10" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-black mb-2">
                Tecnologia Avançada
              </h3>
              <p className="text-gray-700">
                Utilizamos tecnologias de ponta para oferecer monitoramento em tempo real e controle do consumo de energia.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-t-lg">
              <MdVerified className="text-green-600 w-10 h-10" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-black mb-2">
                Foco em Sustentabilidade
              </h3>
              <p className="text-gray-700">
                Nossa plataforma contribui diretamente para a adoção de práticas sustentáveis, ajudando empresas e residências a alcançarem suas metas ambientais.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-t-lg">
              <MdVerified className="text-green-600 w-10 h-10" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-black mb-2">
                Modelo B2B Integrado
              </h3>
              <p className="text-gray-700">
                Ideal para concessionárias, construtoras e incorporadoras que desejam agregar valor aos seus serviços, oferecendo aos clientes finais uma solução diferenciada.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-5 bg-white shadow-md rounded-lg flex flex-col items-center text-center">
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-t-lg">
              <MdVerified className="text-green-600 w-10 h-10" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-black mb-2">
                Baixo Custo de Manutenção
              </h3>
              <p className="text-gray-700">
                Nossa solução oferece um custo de manutenção reduzido, proporcionando economia a longo prazo para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-center gap-10 flex-wrap">
          <div className="w-full max-w-xs">
            <Image src={redonda} alt="Cover Your Everyday Expenses" className="w-full h-auto rounded-full mx-auto" />
          </div>
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold mb-3 text-black text-center md:text-left">Redução de Custos</h3>
            <p className="text-xl text-black text-center md:text-left">
              Com o Smart Energy, você terá controle total sobre o seu consumo de energia, permitindo identificar oportunidades para reduzir gastos de forma significativa. Nossas ferramentas ajudam a monitorar e entender os padrões de consumo, possibilitando ajustes que se traduzem em economia real para o seu negócio ou residência.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 flex-wrap">
          <div className="w-full max-w-xs">
            <Image src={redonda01} alt="We Offer Low Fees That Are Transparent" className="w-full h-auto rounded-full mx-auto" />
          </div>
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold mb-3 text-black text-center md:text-left">Transparência</h3>
            <p className="text-xl text-black text-center md:text-left">
              Nossa plataforma foi projetada para ser intuitiva e fácil de usar, garantindo que você tenha total clareza sobre como a energia está sendo consumida. Fornecemos relatórios detalhados e informações acessíveis, permitindo que você entenda e gerencie seu consumo com total transparência e confiança.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalProductDesignAgency;
