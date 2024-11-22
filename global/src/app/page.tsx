"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import imagem1 from "@/img/01.png";
import redonda from "@/img/imagem_2.png";
import redonda01 from "@/img/imagem_3.png";
import { MdVerified } from "react-icons/md";

const DigitalProductDesignAgency: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{
      padding: '50px 5%',
      backgroundColor: '#fff'
    }}>
      <section style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80vh',
        flexWrap: 'wrap'
      }}>
        <div style={{ maxWidth: '500px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1.2', color: '#000' }}>
            Revolucionando <span style={{ color: '#008000' }}>o consumo </span>de energia!
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#000', margin: '20px 0' }}>
            Com nossas ferramentas inteligentes, fornecemos insights valiosos que ajudam a reduzir custos e promover práticas ecológicas, trazendo maior controle e visibilidade sobre o uso de energia elétrica.
          </p>
          <button
            style={{
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: '#008000',
              color: '#fff',
              border: '2px solid #008000',
              borderRadius: '30px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 128, 0, 0.4)',
              transition: 'transform 0.3s',
              marginTop: '20px'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            onClick={() => window.location.href = "/login"}
          >
            Cadastre-se
          </button>
          <button
            style={{
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: '#008000',
              color: '#fff',
              border: '2px solid #008000',
              borderRadius: '30px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 128, 0, 0.4)',
              transition: 'transform 0.3s',
              marginTop: '20px'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            onClick={() => window.location.href = "#"}
          >
            Login
          </button>
        </div>
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Image src={imagem1} alt="Imagem inicial" style={{ width: '100%', height: 'auto', borderRadius: '0%' }} />
          
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

      <section style={{
        padding: '80px 5%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap'
        }}>
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <Image src={redonda} alt="Cover Your Everyday Expenses" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
          </div>
          <div style={{ maxWidth: '600px' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#000' }}>Redução de Custos</h3>
            <p style={{ fontSize: '1.25rem', color: '#000' }}>
              Com o Smart Energy, você terá controle total sobre o seu consumo de energia, permitindo identificar oportunidades para reduzir gastos de forma significativa. Nossas ferramentas ajudam a monitorar e entender os padrões de consumo, possibilitando ajustes que se traduzem em economia real para o seu negócio ou residência.
            </p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap'
        }}>
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <Image src={redonda01} alt="We Offer Low Fees That Are Transparent" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
          </div>
          <div style={{ maxWidth: '600px' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#000' }}>Transparência</h3>
            <p style={{ fontSize: '1.25rem', color: '#000' }}>
              Nossa plataforma foi projetada para ser intuitiva e fácil de usar, garantindo que você tenha total clareza sobre como a energia está sendo consumida. Fornecemos relatórios detalhados e informações acessíveis, permitindo que você entenda e gerencie seu consumo com total transparência e confiança.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalProductDesignAgency;