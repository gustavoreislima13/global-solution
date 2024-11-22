import Link from "next/link";
import { GiEcology } from "react-icons/gi";
import '@/app/globals.css';

export default function Cabecalho() {
  return (
    <header>
      <nav className="bg-green-800 py-5 px-10">
        <div className="flex justify-between items-center">
          <a className="text-white text-3xl font-bold flex items-center">
            <GiEcology /> Smart Energy
          </a>
          <div className="flex gap-8">
            <Link href="/" legacyBehavior>
              <a className="text-white text-xl font-bold">Home</a>
            </Link>
            <Link href="/integrantes" legacyBehavior>
              <a className="text-white text-xl font-bold">Integrantes</a>
            </Link>
            <Link href="/login" legacyBehavior>
              <a className="text-white text-xl font-bold">Login</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
