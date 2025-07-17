import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { BarChart } from "lucide-react"

export default function dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">DreamBot Dashboard</h1>

      <Tabs defaultValue="bots" className="space-y-4">
        <TabsList>
          <TabsTrigger value="bots">Bots</TabsTrigger>
          <TabsTrigger value="vendas">Vendas</TabsTrigger>
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
        </TabsList>

        {/* ABA: BOTS */}
        <TabsContent value="bots">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-bold">Bots Ativos</h2>
                <p className="text-4xl">12</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-bold">Gold/Hora</h2>
                <p className="text-4xl">32.5K</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-bold">Farm Total</h2>
                <p className="text-4xl">1.2M</p>
              </CardContent>
            </Card>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bot</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Gold/H</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>bot1@gmail.com</TableCell>
                <TableCell><span className="text-green-400">Online</span></TableCell>
                <TableCell>3.5k</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>bot2@gmail.com</TableCell>
                <TableCell><span className="text-red-400">Offline</span></TableCell>
                <TableCell>0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>

        {/* ABA: VENDAS */}
        <TabsContent value="vendas">
          <Card className="mb-4">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-2">Resumo de Vendas</h2>
              <p>Total vendido hoje: <span className="font-bold">220k</span></p>
              <p>Origem: Discord</p>
            </CardContent>
          </Card>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>João R.</TableCell>
                <TableCell>150k</TableCell>
                <TableCell>16/07</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lucas Gold</TableCell>
                <TableCell>70k</TableCell>
                <TableCell>16/07</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>

        {/* ABA: CLIENTES */}
        <TabsContent value="clientes">
          <div className="mb-4 flex gap-2">
            <Input placeholder="Buscar cliente..." />
            <Button>Buscar</Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Total Gasto</TableHead>
                <TableHead>Origem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>João R.</TableCell>
                <TableCell>@joaogold</TableCell>
                <TableCell>1.3M</TableCell>
                <TableCell>Discord</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lucas</TableCell>
                <TableCell>@lucasgold</TableCell>
                <TableCell>870k</TableCell>
                <TableCell>Site</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}
