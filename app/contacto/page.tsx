import { ContactForm } from '@/components/sections/contacto/ContactForm';
import React from 'react';

const ContactoPage = () => {
    return (
        <main
            className='min-h-screen bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: `url('https://ondato.com/wp-content/themes/ondato/assets/images/spec-bg.webp')`,
            }}
        >
            <section className='pt-44 pb-16'>
                <ContactForm />
            </section>
        </main>
    );
};

export default ContactoPage;
