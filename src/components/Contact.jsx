import React from 'react';
import '../scss/Contact.scss';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div className='contact ContactForm'>
            <h2>Contact</h2>
            <form onSubmit={onSubmit}>
                <div className='names'>
                    <input id='first-name' type='text' name='first_name' placeholder='First name' value={toSend.first_name} onChange={handleOnChange} />
                    <input id='last-name' type='text' name='last_name' placeholder='Last name' value={toSend.last_name} onChange={handleOnChange} />
                </div>
                <input id='email' type='text' name='reply_to' placeholder='Yourt email' value={toSend.reply_to} onChange={handleOnChange} />
                <textarea id='message' type='text' name='message' placeholder='Message' value={toSend.message} onChange={handleOnChange} />
                <button type='submit'>Submit</button>
                <ToastContainer autoClose={2000} />
            </form>
        </div>
    );
};

export default Contact;