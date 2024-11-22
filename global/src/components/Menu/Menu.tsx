import Link from "next/link";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaCalculator } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";
import '@/app/globals.css';

export default function Menu() {
  return (
    <nav className="bg-white p-5 shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        {/* Links de Navegação */}
        <div className="flex gap-8">
          <Link href="/dashboard" legacyBehavior>
            <a className="flex items-center gap-2 text-green-700 text-lg font-bold hover:text-green-900 transition">
              <MdOutlineSpaceDashboard size={24} />
              Dashboard
            </a>
          </Link>
          <Link href="/consumo" legacyBehavior>
            <a className="flex items-center gap-2 text-green-700 text-lg font-bold hover:text-green-900 transition">
              <FaCalculator size={24} />
              Calcular Consumo
            </a>
          </Link>
          <Link href="/relatorio" legacyBehavior>
            <a className="flex items-center gap-2 text-green-700 text-lg font-bold hover:text-green-900 transition">
              <HiOutlineDocumentText size={24} />
              Relatórios
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
