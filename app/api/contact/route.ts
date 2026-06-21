import { NextRequest, NextResponse } from "next/server";

// Adresse qui reçoit les demandes de rendez-vous.
const NOTIFY_EMAIL = "loulounejado@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { nom, telephone, email, ville, prestation, message } = data;

    if (!nom || !telephone || !email || !ville) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY manquante : email non envoyé.");
      return NextResponse.json(
        { error: "Service d'envoi non configuré" },
        { status: 500 }
      );
    }

    const html = `
      <h2>Nouvelle demande de rendez-vous — Maison Lou</h2>
      <p><strong>Nom :</strong> ${escapeHtml(nom)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(telephone)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Ville :</strong> ${escapeHtml(ville)}</p>
      <p><strong>Prestation souhaitée :</strong> ${escapeHtml(prestation || "—")}</p>
      <p><strong>Message :</strong><br/>${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Maison Lou <onboarding@resend.dev>",
        to: [NOTIFY_EMAIL],
        reply_to: email,
        subject: `Nouvelle demande de RDV — ${nom} (${ville})`,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Erreur Resend:", errText);
      return NextResponse.json({ error: "Échec de l'envoi" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur API contact:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
