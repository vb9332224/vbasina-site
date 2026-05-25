import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  contact?: string;
  message?: string;
  product?: string;
  consent?: boolean;
};

export async function POST(req: NextRequest) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name || !body.email || !body.consent) {
    return NextResponse.json(
      { ok: false, error: "Заполните имя, email и согласие на обработку ПДн." },
      { status: 422 },
    );
  }

  console.log("[lead]", {
    ts: new Date().toISOString(),
    ...body,
  });

  return NextResponse.json({ ok: true });
}
