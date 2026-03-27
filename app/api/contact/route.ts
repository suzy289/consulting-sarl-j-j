import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, whatsapp, service, message, whatsappContact } = body;

    if (!name || !email || !whatsapp || !service || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "J & J Consulting <onboarding@resend.dev>";
    const toEmail = process.env.CONTACT_EMAIL || "darlinhhho@gmail.com";
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `[J & J Consulting] Demande de contact - ${service}`,
        html: `
          <h2>Nouvelle demande de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Entreprise :</strong> ${company || "—"}</p>
          <p><strong>WhatsApp :</strong> ${whatsapp}</p>
          <p><strong>Type de service :</strong> ${service}</p>
          <p><strong>Contact WhatsApp souhaité :</strong> ${whatsappContact ? "Oui" : "Non"}</p>
          <h3>Message :</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      if (error) {
        console.error("Erreur Resend:", error);
        return NextResponse.json(
          { error: "Échec de l'envoi" },
          { status: 500 }
        );
      }
    } else {
      console.log("Demande de contact (RESEND_API_KEY non configuré):", {
        name,
        email,
        company,
        whatsapp,
        service,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
