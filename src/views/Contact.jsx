// dependencies
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// components
import Banner from '../components/Banner';

const Contact = () => {
    const [banner, setBanner] = useState(false);
    const [type, setType] = useState('success');
    const [message, setMessage] = useState('Sent!');
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Anish',
                from_email: form.email,
                to_email: 'toanish21@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            setBanner(true);
            setForm({ name: '', email: '', message: '' });
        }).catch(() => {
            setIsLoading(false);
            setType('error');
            setMessage('Email not sent');
            setBanner(true);
        });
    };

    return (
        <section className='relative flex-1 lg:flex-row flex-col
            max-container h-screen'
        >
            <div className=' min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in Touch</h1>
                <form
                    className='w-full flex flex-col gap-7 mt-14'
                    onSubmit={handleSubmit}
                >
                    <div className='flex w-full h-8'>
                        {banner && (
                            <Banner
                                type={type}
                                message={message}
                                setBanner={setBanner}
                            />
                        )}
                    </div>
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input
                            type='text'
                            name='name'
                            className='input'
                            placeholder='John'
                            required
                            value={form.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Email
                        <input
                            type='email'
                            name='email'
                            className='input'
                            placeholder='john@gmail.com'
                            required
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Your Message
                        <textarea
                            name='message'
                            rows={4}
                            className='textarea'
                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            required
                            value={form.message}
                            onChange={handleChange}
                        />
                    </label>
                    <button
                        type='submit'
                        className='btn'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;