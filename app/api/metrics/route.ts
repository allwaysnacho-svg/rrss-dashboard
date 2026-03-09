import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: Request) {
  // 1. Obtenemos el ID de la URL (ej: /api/metrics?profileId=1)
  const { searchParams } = new URL(request.url)
  const profileId = searchParams.get('profileId')

  if (!profileId) {
    return NextResponse.json({ error: "Falta el profileId" }, { status: 400 })
  }

  // 2. Usamos Prisma para buscar las métricas de ESE cliente específico
  const metrics = await prisma.metric.findMany({
    where: {
      profileId: profileId 
    },
    orderBy: {
      createdAt: 'desc' // Para ver las más recientes primero
    }
  })

  return NextResponse.json(metrics)
}