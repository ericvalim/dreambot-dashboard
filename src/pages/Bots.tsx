const Bots = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard de Bots</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-neutral-800 text-white rounded-2xl p-4 shadow">
          <p className="text-sm">Bots Online</p>
          <h2 className="text-xl font-bold">12</h2>
        </div>
        <div className="bg-neutral-800 text-white rounded-2xl p-4 shadow">
          <p className="text-sm">Gold por Hora</p>
          <h2 className="text-xl font-bold">720k</h2>
        </div>
        <div className="bg-neutral-800 text-white rounded-2xl p-4 shadow">
          <p className="text-sm">Total Farmado</p>
          <h2 className="text-xl font-bold">51.3M</h2>
        </div>
        <div className="bg-neutral-800 text-white rounded-2xl p-4 shadow">
          <p className="text-sm">Bots Ativos</p>
          <h2 className="text-xl font-bold">36</h2>
        </div>
      </div>
    </div>
  )
}

export default Bots
