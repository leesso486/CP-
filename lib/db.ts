import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL || '';

if (!databaseUrl) {
  console.warn('Warning: DATABASE_URL is not set');
}

export const sql = databaseUrl ? neon(databaseUrl) : ({} as any);
