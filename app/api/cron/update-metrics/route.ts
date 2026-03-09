import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Esta función se ejecutará automáticamente
export async function GET(request: Request) {
  // SEGURIDAD: Verifica que la petición venga de tu proveedor de Cron, no de un usuario curioso.
  // En Vercel, se usa CRON_SECRET en tus variables de entorno (.env)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    // 1. Obtenemos TODOS los perfiles que necesitan actualización
    const profiles = await prisma.profile.findMany();

    // 2. Iteramos y "simulamos" obtener datos de la API de RRSS
    // (Aquí es donde iría la llamada real a Instagram/TikTok/etc.)
    for (const profile of profiles) {
      // Simulamos un crecimiento aleatorio para el ejemplo
      const randomGrowth = Math.floor(Math.random() * 100); 
      const newFollowersCount = (profile.lastKnownFollowers || 1000) + randomGrowth;

      // 3. Guardamos la nueva métrica diaria en Prisma
      await prisma.metric.create({
        data: {
          followers: newFollowersCount,
          profileId: profile.id,
        },
      });
    }

    return NextResponse.json({ success: true, updated: profiles.length });

// ... resto del código arriba ...
  } catch (error) {
    console.error(error);
    return NextResponse.json({ 
      success: false, 
      error: "Error al actualizar métricas" 
    }, { status: 500 });
  }
}