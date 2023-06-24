import React from 'react';
import '../scss/Contact.scss';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import email from '../static/email.svg';

const Contact = () => {
    const [toSend, setToSend] = useState({
        first_name: '',
        last_name: '',
        message: '',
        reply_to: '',
    });

    const showToastMessage = () => {
        toast.success('Email Sent!', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const handleOnChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_nu8oj9k', // service id
            'template_p52kude', // template id
            toSend, // data to send
            'Ir8rj0Zvfi_dXwpFb' // user id
        )
            .then((response) => {
                console.log('SUCCESS', response.status, response.text);
                console.log(document.getElementById('first-name').value);
                document.getElementById('first-name').value = '';
                document.getElementById('last-name').value = '';
                document.getElementById('message').value = '';
                document.getElementById('email').value = '';
                showToastMessage();
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    return (
        <div id='contact' className='contact-form'>
            <h2>Contacto</h2>
            <div className='contact-formAndImg'>
                <form onSubmit={onSubmit}>
                    <div className='names'>
                        <input id='first-name' type='text' name='first_name' placeholder='Nombre' value={toSend.first_name} onChange={handleOnChange} required />
                        <input id='last-name' type='text' name='last_name' placeholder='Apellido' value={toSend.last_name} onChange={handleOnChange} required />
                    </div>
                    <input id='email' type='email' name='reply_to' placeholder='Correo electrónico' value={toSend.reply_to} onChange={handleOnChange} required />
                    <textarea id='message' type='text' name='message' placeholder='Ingrese su mensaje...' value={toSend.message} onChange={handleOnChange} required />
                    <button type='submit'>Enviar</button>
                    <ToastContainer autoClose={2000} />
                </form>
                <img src={email} alt='' />
            </div>
        </div>
    );
};

export default Contact;
