"use client";
import React, { useState } from 'react'
import './contact_form.css'
import ContactBar from '../contactBar/ContactBar';
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion'

const ContactForm = () => {
    interface Form {
        f_name: string,
        l_name: string,
        email: string,
        phone_no: string,
        message: string

    }
    const [ContactFormData, setContactFormData] = useState<Form>({
        f_name: '',
        l_name: '',
        email: '',
        phone_no: '',
        message: ''
    })
    const changeInputField = (event: React.ChangeEvent | undefined) => {
        if (event && event.target) {
            const target = event.target as HTMLInputElement;
            setContactFormData((prev) => ({
                ...prev,
                [target.name]: target.value,
            }));
        }
    };




    const handleContactForm = (event: React.FormEvent) => {
        event.preventDefault();
        const formElement = document.getElementById('Contact_form');
        if (formElement instanceof HTMLFormElement) {
            formElement.reset();
        }
        console.log(ContactFormData);
        const { f_name, l_name, email, phone_no, message } = ContactFormData;
        const name = f_name + l_name;
        const mes = (`Name: ${name} \n Email: ${email} \n Phone No: ${phone_no} \n Message: ${message}`)
        console.log(mes);

        const templateParams = {
            from_name: name,
            to_name: "Mehboob Alam",
            message: mes,
        };

        emailjs.send(
            'service_9al02ii',
            'template_puz0k3a',
            templateParams,
            'jCxc5DOvN54Au7Fzs'
        ).then((response: any) => {
                alert('Email sent successfully!');
            console.log("response",response);
            }).catch((error: any) => {
                alert('Error sending email:' + error);
                console.log(error?.message,error);
            });
    }
    return (
        <section id='contact'>
            <motion.form initial={{opacity:.6}} whileInView={{opacity:1, y:[100,0]}} transition={{duration:1}} onSubmit={handleContactForm} id="Contact_form" className="ContactForm">
                <div className="row"><h2 className='project_h2 text-4xl text-center text-custom-accent-200 ' style={{ fontFamily: 'fantasy' }}>Get In Touch</h2></div>
                <div className="row">
                    <input className="rowElment rounded-full" onChange={changeInputField} type="text" name="f_name" id="f_name" placeholder='Enter first name ...' required />
                    <input className="rowElment rounded-full" onChange={changeInputField} type="text" name="l_name" id="l_name" placeholder='Enter last name ...' required />
                </div>
                <div className="row">
                    <input type="email" className="rowElment rounded-full" name="email" onChange={changeInputField} id="email" placeholder='Enter email here ...' required />
                    <input type="number" name="phone_no" className="rowElment rounded-full" id="phone_no" onChange={changeInputField} placeholder='Enter phone number ...' required />
                </div>
                <div className="row">

                    <textarea name="message" className="rowElment rounded-xl" id="message" cols={20} rows={7} onChange={changeInputField} placeholder='Enter Message Here ....' minLength={10} required></textarea>
                </div>

                <div className="flex items-center justify-center w-screen"><button className='text-custom-text-100 font-semibold px-10 py-3 mt-5 w-1/8 rounded-full hover:bg-custom-primary-200 bg-custom-accent-200 border-2 ' id='Contact_form' type="submit">Send Email</button></div>
            </motion.form>
            <ContactBar />
        </section>

    )
}

export default ContactForm
