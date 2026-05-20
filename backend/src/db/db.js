import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);

export async function setupDB() {
  try {
    console.log('Connection established');

    await sql`
      CREATE TABLE IF NOT EXISTS notes (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content VARCHAR(255) NOT NULL
      );
    `;
    console.log('Finished init db.');


  } catch (err) {
    console.error('Connection failed.', err);
  }
}