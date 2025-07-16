import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="p-4 bg-neutral-900 text-white flex gap-6 shadow-md">
      <Link to="/" className="hover:underline">Bots</Link>
      <Link to="/vendas" className="hover:underline">Vendas</Link>
      <Link to="/clientes" className="hover:underline">Clientes</Link>
      <Link to="/ranking" className="hover:underline">Ranking</Link>
    </nav>
  )
}

export default Navbar
