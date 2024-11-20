import { query } from '@/lib/db';

export async function GET() {
  try {
    // Realiza la consulta a la base de datos
    const data = await query('SELECT * FROM tasks', []);
    
    // Verifica si los datos se obtuvieron correctamente
    console.log(data); // Esto debería mostrar el array de tareas

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error al obtener tareas:', error); // Imprime el error para depuración
    return new Response(JSON.stringify({ error: 'Error al obtener tareas' }), { status: 500 });
  }
}
