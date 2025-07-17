// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Bots from './pages/Bots'
import Vendas from './pages/Vendas'
import Clientes from './pages/Clientes'
import Ranking from './pages/Ranking'
import Navbar from './components/ui/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bots />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </>
  )
}

export default App
