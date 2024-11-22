import Image from 'next/image';
import facebook from '@/img/facebook.png';
import instagram from '@/img/instagram.png';
import twitterx from '@/img/twitterx.png';

export default function Rodape() {
  return (
    <>
      <nav className="bg-white py-5 px-10">
        <div className="flex justify-between items-center">
        </div>
      </nav>
      <footer className="bg-gradient-to-t from-green-800 to-white py-10 px-10 flex justify-center gap-8">
        <div className="flex items-center justify-center">
          <Image src={instagram} alt="Logo Instagram" className="w-10 h-10 cursor-pointer transition-transform transform hover:scale-110" />
        </div>
        <div className="flex items-center justify-center">
          <Image src={twitterx} alt="Logo Twitter" className="w-10 h-10 cursor-pointer transition-transform transform hover:scale-110" />
        </div>
        <div className="flex items-center justify-center">
          <Image src={facebook} alt="Logo Facebook" className="w-10 h-10 cursor-pointer transition-transform transform hover:scale-110" />
        </div>
      </footer>
    </>
  );
}
