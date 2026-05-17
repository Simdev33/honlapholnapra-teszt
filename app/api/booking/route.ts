import { NextResponse } from "next/server"

type BookingPayload = {
  date?: string
  time?: string
  name?: string
  email?: string
  phone?: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@honlapholnapra.hu"
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Honlapholnapra <onboarding@resend.dev>"

  if (!resendApiKey) {
    return NextResponse.json({ error: "Hiányzik a RESEND_API_KEY." }, { status: 500 })
  }

  let payload: BookingPayload
  try {
    payload = (await request.json()) as BookingPayload
  } catch {
    return NextResponse.json({ error: "Hibás kérés." }, { status: 400 })
  }

  const date = (payload.date || "").trim()
  const time = (payload.time || "").trim()
  const name = (payload.name || "").trim()
  const email = (payload.email || "").trim()
  const phone = (payload.phone || "").trim()

  if (!date || !time || !name || !email || !phone) {
    return NextResponse.json({ error: "Minden mező kitöltése kötelező." }, { status: 400 })
  }

  const safeDate = escapeHtml(date)
  const safeTime = escapeHtml(time)
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone)

  const subject = `Új időpontfoglalás: ${safeName}`
  const html = `
    <h2>Új ingyenes megbeszélés foglalás érkezett</h2>
    <p><strong>Név:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Mobilszám:</strong> ${safePhone}</p>
    <p><strong>Dátum:</strong> ${safeDate}</p>
    <p><strong>Idősáv:</strong> ${safeTime}</p>
  `

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      html,
    }),
  })

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text()
    return NextResponse.json({ error: "Resend hiba", details: errorText }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
