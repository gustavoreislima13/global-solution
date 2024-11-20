import Link from 'next/link';

export default function Menu() {
  return (
    <nav style={{ backgroundColor: '#fff', padding: '20px 10%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a style={{ textDecoration: 'none', color: '#000', fontSize: '2rem', fontWeight: 'bold' }}>
          Smart Energy
        </a>
        <div style={{ display: 'flex', gap: '30px' }}>
          <Link href="/" legacyBehavior>
            <a style={{ color: '#008000', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 'bold' }}>Home</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a style={{ color: '#008000', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 'bold' }}>Login</a>
          </Link>
          <Link href="/integrantes" legacyBehavior>
            <a style={{ color: '#008000', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 'bold' }}>Integrantes</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
