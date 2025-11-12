export async function GET() {
  return new Response(JSON.stringify({
    ok: true,
    env: process.env.VERCEL_ENV || 'local',
    sha: process.env.VERCEL_GIT_COMMIT_SHA || 'unknown',
    ts: Date.now()
  }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
