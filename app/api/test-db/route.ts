import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Check database timestamp (tests connection)
    const result = await sql`SELECT NOW() as current_time`;
    
    // 2. You can add sample tables later here, but right now we just print connection success
    return NextResponse.json({
      success: true,
      message: 'Successfully connected to NeonDB!',
      timestamp: result[0].current_time
    }, { status: 200 });

  } catch (error: any) {
    console.error('Database connection error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to connect to NeonDB.',
      error: error.message
    }, { status: 500 });
  }
}
