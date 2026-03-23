import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const emailTo = process.env.CONTACT_EMAIL || "d.o.m.eventagency@gmail.com";

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error("SMTP not configured. Email data:", data);
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const servicesHtml = data.services?.length
      ? `<p><strong>Izvēlētie pakalpojumi:</strong><br/>${data.services.join("<br/>")}</p>`
      : "";
    const messageHtml = data.message
      ? `<p><strong>Ziņojums:</strong><br/>${data.message}</p>`
      : "";

    await transporter.sendMail({
      from: smtpUser,
      to: emailTo,
      replyTo: data.email,
      subject: `Jauns pieteikums no ${data.name}`,
      html: `
        <h2>Jauns pieteikums no mājaslapas</h2>
        <p><strong>Vārds:</strong> ${data.name}</p>
        <p><strong>E-pasts:</strong> ${data.email}</p>
        <p><strong>Telefons:</strong> ${data.phone || "Nav norādīts"}</p>
        ${servicesHtml}
        ${messageHtml}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 400 });
  }
}
