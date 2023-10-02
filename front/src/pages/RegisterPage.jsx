import { useForm } from 'react-hook-form';
import '../register.css';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function RegisterPage() {
    const [response, setResponse] = useState(null);
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nombreError, setNombreError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const recaptchaRef = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica si los campos están vacíos
        if (!nombre || !email || !password) {
            setNombreError(!nombre);
            setEmailError(!email);
            setPasswordError(!password);
            alert('Por favor, rellena todos los campos.');
            return;
        }

        // Verifica si ReCAPTCHA se ha completado
        if (!response) {
            alert('Por favor, completa el reCAPTCHA.');
            return;
        }

        // Si todo está bien, envía los datos al servidor
        const data = {
            nombre: nombre,
            email: email,
            password: password,
            recaptcha: response
        };

        try {
            fetch('http://localhost:8000/user', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => console.log(data));
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };
    
    return (
        <div className="container">
            <div className="registro">
                <h1>Registro</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="nombre"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}

                        placeholder='Nombre' />

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