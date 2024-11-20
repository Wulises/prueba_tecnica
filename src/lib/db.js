import { Pool } from 'pg'; // Usando pg para conectar con PostgreSQL

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // Necesario para usar conexiones remotas con SSL
  },
});

export async function query(text, params) {
  const res = await pool.query(text, params);
  return res.rows;
}
