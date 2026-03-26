"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const needs = formData.get("needs") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: "Matzu Contato <onboarding@resend.dev>", // Depois você pode validar seu domínio matzu.com.br aqui
      to: ["seu-email@exemplo.com"], // Coloque o e-mail onde você quer receber os leads
      subject: `Novo Lead: ${name} - ${company}`,
      html: `
        <h1>Novo contato via Site Matzu</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Necessidade:</strong> ${needs}</p>
      `,
    });

    if (error) {
      return { success: false, error };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}