"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import imagem1 from "@/img/01.png";
import verificada from "@/img/validada.png";
import redonda from "@/img/imagem_2.png";
import redonda01 from "@/img/imagem_3.png";

const DigitalProductDesignAgency: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fff',
    }}>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: 'auto',
        gap: '20px',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1.2', color: '#000' }}>
            Revolucionando <span style={{ color: '#008000' }}>o consumo </span>de energia!
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#000', margin: '20px 0' }}>
            Com nossas ferramentas inteligentes, fornecemos insights valiosos que ajudam a reduzir custos e promover práticas ecológicas, trazendo maior controle e visibilidade sobre o uso de energia elétrica.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              onClick={() => window.location.href = "/login"}
            >
              Login
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
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              onClick={() => window.location.href = "/register"}
            >
              Cadastre-se
            </button>
          </div>
        </div>
        <div>
          <Image
            src={imagem1}
            alt="People collaborating on a design project"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '200px' }}
          />
        </div>
      </section>

      <section style={{
        backgroundColor: '#fff',
        padding: '50px 20px'
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#000', textAlign: 'center' }}>
          Por que escolher <span style={{ color: '#008000' }}>o Smart Energy?</span>
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#000', marginBottom: '30px', textAlign: 'center' }}>
          Nosso compromisso é com a transparência e a sustentabilidade.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          {[
            {
              title: 'Tecnologia Avançada',
              description: 'Utilizamos tecnologias de ponta para oferecer monitoramento em tempo real e controle do consumo de energia.',
              image: verificada
            },
            {
              title: 'Foco em Sustentabilidade',
              description: 'Nossa plataforma contribui diretamente para a adoção de práticas sustentáveis, ajudando empresas e residências a alcançarem suas metas ambientais.',
              image: verificada
            },
            {
              title: 'Modelo B2B Integrado',
              description: 'Ideal para concessionárias, construtoras e incorporadoras que desejam agregar valor aos seus serviços, oferecendo aos clientes finais uma solução diferenciada.',
              image: verificada
            },
            {
              title: 'Baixo Custo de Manutenção',
              description: 'Nossa solução oferece um custo de manutenção reduzido, proporcionando economia a longo prazo para nossos clientes.',
              image: verificada
            }
          ].map((card, index) => (
            <div key={index} style={{
              padding: '20px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image src={card.image} alt="Service Icon" width={80} height={80} style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '10px', color: '#000' }}>{card.title}</h3>
              <p style={{ color: '#000' }}>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        padding: '50px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '20px'
        }}>
          <Image src={redonda} alt="Cover Your Everyday Expenses" style={{ maxWidth: '100%', height: 'auto' }} />
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#000' }}>Redução de Custos</h3>
            <p style={{ fontSize: '1.25rem', color: '#000' }}>
              Com o Smart Energy, você terá controle total sobre o seu consumo de energia, permitindo identificar oportunidades para reduzir gastos de forma significativa. Nossas ferramentas ajudam a monitorar e entender os padrões de consumo, possibilitando ajustes que se traduzem em economia real para o seu negócio ou residência.
            </p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '20px'
        }}>
          <Image src={redonda01} alt="We Offer Low Fees That Are Transparent" style={{ maxWidth: '100%', height: 'auto' }} />
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#000' }}>Transparência</h3>
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
