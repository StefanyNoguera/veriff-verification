// app/api/veriff/route.js
import { createSession } from '/lib/veriff';

export async function GET() {
  try {
    const session = await createSession();
    return new Response(JSON.stringify(session), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create session' }), { status: 500 });
  }
}
