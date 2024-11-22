import Link from "next/link";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaCalculator } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";

export default function Menu() {
  return (
    <nav style={{ backgroundColor: '#fff', padding: '20px 10%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '30px' }}>
      <Link href="/" legacyBehavior>
          <a style={{ color: '#008000', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 'bold' }}><MdOutlineSpaceDashboard />Dashboard</a>
      </Link>
      <Link href="/" legacyBehavior>
          <a style={{ color: '#008000', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 'bold' }}><FaCalculator />Calcular Consumo</a>
      </Link>
      <Link href="/" legacyBehavior>
          <a style={{ color: '#008000', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 'bold' }}><HiOutlineDocumentText />Relatórios</a>
      </Link>
    </div>
  </div>
</nav>
  );
}
