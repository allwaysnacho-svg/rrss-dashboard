import prisma from '@/lib/prisma'

export default async function ClientPage({ params }: { params: { id: string } }) {
  const { id } = params // Este es el "1", "2", o "abc" de la URL

  // Buscamos el cliente y sus métricas en una sola consulta
  const clientData = await prisma.client.findUnique({
    where: { id: id },
    include: { metrics: true }
  })

  if (!clientData) return <div>Cliente no encontrado</div>

  return (
    <div className="p-6">
      <h1>Dashboard de {clientData.name}</h1>
      {/* Aquí mapeas tus métricas reales de la DB */}
      <div className="text-4xl font-bold">
        {clientData.metrics[0]?.followers.toLocaleString() ?? 0} Seguidores
      </div>
    </div>
  )
}