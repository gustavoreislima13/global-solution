import Image from 'next/image';
import facebook from '@/img/facebook.png';
import instagram from '@/img/instagram.png';
import twitterx from '@/img/twitterx.png';

export default function Rodape() {
  return (
    <>
      <nav style={{ backgroundColor: '#fff', padding: '20px 10%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        </div>
      </nav>
      <footer style={{ backgroundColor: '#fff', padding: '40px 10%', display: 'flex', justifyContent: 'center', gap: '30px' }}>
        <div>
          <Image src={instagram} alt="Logo Instagram" style={{ width: '40px', height: '40px', cursor: 'pointer' }} />
        </div>
        <div>
          <Image src={twitterx} alt="Logo Twitter" style={{ width: '40px', height: '40px', cursor: 'pointer' }} />
        </div>
        <div>
          <Image src={facebook} alt="Logo Facebook" style={{ width: '40px', height: '40px', cursor: 'pointer' }} />
        </div>
      </footer>
    </>
  );
}
