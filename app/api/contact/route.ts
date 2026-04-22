import { NextResponse } from "next/server"

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  budget?: string
  project?: string
  message?: string
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

  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: "Hibás kérés." }, { status: 400 })
  }

  const name = (payload.name || "").trim()
  const email = (payload.email || "").trim()
  const phone = (payload.phone || "").trim()
  const budget = (payload.budget || "").trim()
  const project = (payload.project || "").trim()
  const message = (payload.message || "").trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Név, email és üzenet kötelező." }, { status: 400 })
  }

  const subject = `Uj erdeklodes: ${name}`
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone || "-")
  const safeBudget = escapeHtml(budget || "-")
  const safeProject = escapeHtml(project || "-")
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>")

  const html = `
    <h2>Uj kapcsolatfelvetel erkezett</h2>
    <p><strong>Nev:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Telefon:</strong> ${safePhone}</p>
    <p><strong>Koltsegkeret:</strong> ${safeBudget}</p>
    <p><strong>Projekt tipusa:</strong> ${safeProject}</p>
    <p><strong>Uzenet:</strong><br/>${safeMessage}</p>
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
