import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(request: NextRequest) {
    const { firstname, lastname, email, telefono, message } =
        await request.json();

    let transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT || '465', 10),
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: `"Formulario de contacto" <${process.env.EMAIL_USER}>`,
        to: 'contacto@conlaft.com',
        subject: 'Nuevo formulario de Contacto',
        text: `Recibiste un formulario de contacto de ${firstname} ${lastname}.\n\nEmail: ${email} \n\nTelefono: ${telefono} \n\nMensaje: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Mensaje Enviado!' });
    } catch (error) {
        console.error('Error al enviar mensaje:', error);
        return NextResponse.json(
            { message: 'Error al enviar mensaje' },
            { status: 500 }
        );
    }
}
