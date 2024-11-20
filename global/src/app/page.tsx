"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import imagem1 from "@/img/01.png"
import verificada from "@/img/validada.png"
import redonda from "@/img/imagem 2.jpg"
import redonda01 from "@/img/imagem 3.jpg"







const DigitalProductDesignAgency: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{
      padding: '50px 10%',
      backgroundColor: '#fff'  // Fundo alterado para branco
    }}>
      <section style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80vh'
      }}>
        <div style={{ maxWidth: '500px', marginRight: '40%' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: '1.2', color: '#000' }}>
            Digital <span style={{ color: '#008000' }}>product</span> design agency {/* Alterado para verde */}
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#000', margin: '30px 0' }}>
            Create live segments and target the right people for messages based on their behaviors.
          </p>
          <button style={{
            padding: '20px 40px',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            backgroundColor: '#008000',  // Alterado para verde
            color: '#fff',
            border: '2px solid #008000',  // Alterado para verde
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 128, 0, 0.4)',  // Alterado para verde
            transition: 'transform 0.3s',
            marginTop: '20px'
          }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            Get Started
          </button>
        </div>
        <div>
          <Image
            src={imagem1}
            alt="People collaborating on a design project"
            style={{ maxWidth: '500px', borderRadius: '200px' }}
          />
        </div>
      </section>

      <section style={{
        backgroundColor: '#fff',  // Fundo alterado para branco
        padding: '100px 10%'
      }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>
          Our included <span style={{ color: '#008000' }}>service</span>. {/* Alterado para verde */}
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#000', marginBottom: '50px' }}>
          Aliquam tristique libero at dui sodales, et placerat orci lobortis. Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px'
        }}>
          {[...Array(4)].map((_, index) => (
            <div key={index} style={{
              padding: '40px',
              backgroundColor: '#fff',  // Fundo alterado para branco
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image src={verificada} alt="Service Icon" width={80} height={80} style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#000' }}>Service Title</h3>
              <p style={{ color: '#000' }}>We design professional looking yet simple Logo.</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        padding: '100px 10%',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px'
        }}>
          <div>
            <Image src={redonda} alt="Cover Your Everyday Expenses" style={{ maxWidth: '2000px' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#000' }}>Cover Your Everyday Expenses</h3>
            <p style={{ fontSize: '1.25rem', color: '#000' }}>
              Inspiration comes in many ways and you like to save everything from, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          flexDirection: 'row-reverse'
        }}>
          <div>
            <Image src={redonda01} alt="We Offer Low Fees That Are Transparent" style={{ maxWidth: '2000px' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#000' }}>We Offer Low Fees That Are Transparent</h3>
            <p style={{ fontSize: '1.25rem', color: '#000' }}>
              Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the development of the asset through its charitable foundation.
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default DigitalProductDesignAgency;