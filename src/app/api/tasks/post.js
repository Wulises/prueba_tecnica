import { query } from '@/lib/db';

export async function POST(request) {
  try {
    const { title, description, status } = await request.json();
    if (!title || !description || !status) {
      return new Response(JSON.stringify({ error: 'Faltan datos necesarios' }), { status: 400 });
    }
    
    // Crear una nueva tarea
    const result = await query(
      'INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *',
      [title, description, status]
    );
    return new Response(JSON.stringify(result[0]), { status: 201 });
  } catch (error) {
    console.error('Error al crear tarea:', error);
    return new Response(JSON.stringify({ error: 'Error al crear tarea' }), { status: 500 });
  }
}
