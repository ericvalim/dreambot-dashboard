// src/components/ui/Navbar.tsx
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="p-4 bg-neutral-900 text-white flex gap-6 shadow-md">
      <a href="/" className="hover:underline">Bots</a>
      <a href="/vendas" className="hover:underline">Vendas</a>
      <a href="/clientes" className="hover:underline">Clientes</a>
      <a href="/ranking" className="hover:underline">Ranking</a>
    </nav>
  )
}

export default Navbar

