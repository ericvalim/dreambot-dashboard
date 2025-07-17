import Vendas from "./pages/Vendas";
import Clientes from "./pages/Clientes";
import RankingClientes from "./pages/RankingClientes";
import Navbar from "./components/ui/Navbar";

const App = () => {
  return (
    <div className="flex h-screen w-full">
      <Navbar />
      <main className="flex-1 overflow-auto">
        <Vendas />
        <Clientes />
        <RankingClientes />
      </main>
    </div>
  );
};

export default App;
