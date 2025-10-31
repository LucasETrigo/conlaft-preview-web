// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { firstname, lastname, email, telefono, message } = body;

        if (!email || !message) {
            return NextResponse.json(
                { ok: false, message: 'Faltan campos obligatorios.' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.EMAIL_PORT || '465', 10),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Formulario de contacto" <${process.env.EMAIL_USER}>`,
            to: 'contacto@conlaft.com',
            subject: 'Nuevo formulario de Contacto',
            text: `
Nuevo contacto desde la web:

Nombre: ${firstname || '-'}
Apellido: ${lastname || '-'}
Email: ${email}
Teléfono: ${telefono || '-'}

Mensaje:
${message}
            `,
            html: `
<h2>Nuevo contacto desde la web</h2>
<p><strong>Nombre:</strong> ${firstname || '-'}</p>
<p><strong>Apellido:</strong> ${lastname || '-'}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Teléfono:</strong> ${telefono || '-'}</p>
<p><strong>Mensaje:</strong></p>
<p>${message?.replace(/\n/g, '<br/>') || '-'}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            ok: true,
            message: 'Mensaje enviado. Gracias por contactarnos 🫡',
        });
    } catch (err) {
        console.error('CONTACT_API_ERROR', err);
        return NextResponse.json(
            { ok: false, message: 'No se pudo enviar el mensaje.' },
            { status: 500 }
        );
    }
}
