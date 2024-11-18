import Link from 'next/link';


export default function Cabecalho() {
    return (
      <header className="flex justify-between items-center p-4 bg-black w-full">
        <div className="flex items-center">
        </div>
        
        <nav className="flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="bg-transparent text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">
                Home
              </Link>
            </li>
            
            
            <li>
              <Link href="/chamado" className="bg-transparent text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">
              Login 
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }