import { useForm } from 'react-hook-form';
import '../index.css';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function RegisterPage() {
    const [response, setResponse] = useState(null);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const recaptchaRef = React.createRef();


    const data = {
        email: email,
        password: password,
        recaptcha: response, // Agrega la respuesta de reCAPTCHA 
    }
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        if (response) {
            try {
                fetch('http://localhost:8000/user', options)
                    .then(res => res.json())
                    .then(data => console.log(data))
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        } else {
            alert('Por favor, completa el reCAPTCHA.');
        }
    };

    return (
        <div className="container">
            <div className="registro">
                <h1>Registro</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}

                        placeholder='Email' />


                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}

                        placeholder='Password' />

                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LfsIkUoAAAAAIho2WmIAXLLhCEPf2Ptlhlgi-6J" // Clave de sitio de reCAPTCHA
                        onChange={(value) => setResponse(value)}
                    />


                    <button type='submit' className='button'>
                        Register
                    </button>


                </form>

            </div>
        </div>
    );
}

export default RegisterPage;