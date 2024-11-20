import { query } from '@/lib/db';

export async function GET() {
  try {
    // Consultamos todas las tareas en la base de datos
    const data = await query('SELECT * FROM tasks', []);
    
    // Enviamos la respuesta con los datos en formato JSON
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error al obtener tareas:', error);
    return new Response(JSON.stringify({ error: 'Error al obtener tareas' }), { status: 500 });
  }
}
