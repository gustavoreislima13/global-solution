import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='container mx-auto py-16'>
        <section className='flex justify-between items-center'>
          <div className='max-w-lg'>
            <h1 className='text-5xl font-bold leading-tight text-black mb-6'>
              Atendimento com <span className='text-green-700'>Inteligência Artificial</span>
            </h1>
            <p className='text-xl text-black mb-8'>
              Atendimento inovador com IA. Soluções ágeis e personalizadas aprendendo continuamente para oferecer o melhor serviço!
            </p>
            <button className='bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-md hover:scale-105 transition-transform'>
              Saiba mais
            </button>
          </div>
          <div>
            <Image src='/path/to/image.png' alt='Imagem de Atendimento' width={500} height={500} />
          </div>
        </section>

        <section className='mt-20'>
          <div className='grid grid-cols-4 gap-8'>
            <div className='bg-white shadow-lg rounded-lg p-8 text-center'>
              <Image src='/path/to/ubi-image.png' alt='UBI' width={100} height={100} className='mx-auto mb-6' />
              <h3 className='text-2xl font-bold mb-4'>UBI</h3>
              <p className='text-black'>Economize em sua apólice de seguro com descontos.</p>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-8 text-center'>
              <Image src='/path/to/assistencia-image.png' alt='Assistência 24h' width={100} height={100} className='mx-auto mb-6' />
              <h3 className='text-2xl font-bold mb-4'>Assistência 24h</h3>
              <p className='text-black'>Oferecemos suporte emergencial 24/7 adaptado.</p>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-8 text-center'>
              <Image src='/path/to/preventiva-image.png' alt='Preventiva' width={100} height={100} className='mx-auto mb-6' />
              <h3 className='text-2xl font-bold mb-4'>Preventiva</h3>
              <p className='text-black'>Mantenha seu carro em perfeitas condições.</p>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-8 text-center'>
              <Image src='/path/to/seguros-image.png' alt='Seguros com IA' width={100} height={100} className='mx-auto mb-6' />
              <h3 className='text-2xl font-bold mb-4'>Seguros com IA</h3>
              <p className='text-black'>Recursos de IA para otimizar a interação.</p>
            </div>
          </div>
        </section>

      <section className='flex justify-between items-center mt-20'>
        <div>
          <Image src='/path/to/vantagem-porto-image.png' alt='Vantagem Porto Seguro' width={400} height={300} />
        </div>
        <div className='max-w-lg'>
          <h3 className='text-2xl font-semibold text-black'>Seguradora</h3>
          <h1 className='text-4xl font-bold text-black mb-6'>Vantagem Porto Seguro</h1>
          <ul className='list-none pl-0 space-y-4 text-lg'>
            <li><span className='font-bold text-black'>✓</span> Suporte contínuo para emergências e dúvidas, disponível 24/7.</li>
            <li><span className='font-bold text-blue-500'>✓</span> Ofertas especiais e benefícios.</li>
            <li><span className='font-bold text-blue-500'>✓</span> Recompensas por permanência.</li>
            <li><span className='font-bold text-blue-500'>✓</span> Atendimento personalizado com IA.</li>
            <li><span className='font-bold text-blue-500'>✓</span> Aplicativo móvel intuitivo com IA.</li>
            <li><span className='font-bold text-blue-500'>✓</span> Coberturas flexíveis e customizáveis.</li>
          </ul>
          <div className='flex mt-8'>
            <button className='bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-md mr-4'>Fale conosco</button>
            <button className='bg-white text-green-700 font-bold py-3 px-6 rounded-full border-2 border-green-700 shadow-md'>Veja mais</button>
          </div>
        </div>
      </section>

      <section className='text-center mt-20'>
        <h2 className='text-4xl font-bold mb-8'>Integrantes</h2>
        <p className='text-xl mb-12'>Na Porto Seguro, acreditamos nas pessoas que fazem acontecer!</p>
        <div className='flex justify-center gap-8'>
          {[...Array(3)].map((_, index) => (
            <div key={index} className='text-center'>
              <Image src='/path/to/member-image.png' alt='Integrante' width={150} height={150} className='mx-auto rounded-full' />
              <h3 className='text-xl font-bold mt-4'>{index === 0 ? 'Gustavo Lima' : index === 1 ? 'Leo' : 'Julia'}</h3>
            </div>
          ))}
        </div>
        <p className='text-xl mt-8'>Na Porto Seguro, acreditamos nas pessoas que fazem acontecer!</p>
      </section>

      <section className='text-center mt-20'>
        <h2 className='text-4xl font-bold mb-8'>Feedback de nossos clientes</h2>
        <p className='text-xl mb-12'>Sempre fazendo o melhor!</p>
        <div className='flex justify-center gap-8'>
          {[...Array(2)].map((_, index) => (
            <div key={index} className='text-center'>
              <Image src='/path/to/client-image.png' alt='Cliente' width={150} height={150} className='mx-auto rounded-full' />
              <h3 className='text-xl font-bold mt-4'>Gustavo Lima</h3>
              <p className='text-black mt-2'>Na Porto Seguro, acreditamos nas pessoas que fazem acontecer!</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  </main>
  );
}
