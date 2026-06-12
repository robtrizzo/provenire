import { auth } from "@/auth";
import { supabaseAdmin } from "@/lib/supabase-admin";

const TABLE = "arc3_crew_sheets";
const CREW_ID = "arc3-main";

// Anyone can read the crew sheet
export async function GET() {
  const { data, error } = await supabaseAdmin
    .from(TABLE)
    .select("public_data")
    .eq("id", CREW_ID)
    .maybeSingle();

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json(data);
}

// Any authenticated user can write
export async function PATCH(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body?.public_data) {
    return Response.json({ error: "Missing public_data" }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from(TABLE)
    .upsert(
      {
        id: CREW_ID,
        public_data: body.public_data,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" },
    );

  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ ok: true });
}
