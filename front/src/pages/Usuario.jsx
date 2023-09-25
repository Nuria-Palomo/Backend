import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function CreateUsuario() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [response, setResponse] = useState(null); // Agregamos el estado para la respuesta de reCAPTCHA
    const recaptchaRef = React.createRef();

    const data = {
        name: name,
        email: email,
        password: password,
        role: role,
        recaptcha: response, // Agregamos la respuesta de reCAPTCHA al objeto de datos
    };
    
    const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (response) {
            try {
                fetch('http://localhost:8000/user', options)
                    .then(res => res.json())
                    .then(data => console.log(data));
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        } else {
            alert('Por favor, completa el reCAPTCHA.');
        }
    };

    return (
        <div className="container">
            <div className="usuario">
                <h1>Crear Usuario</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder='Nombre'
                    />

                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder='Email'
                    />

                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder='Password'
                    />

                    <input
                        type="text"
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                        placeholder='Role'
                    />

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

export default CreateUsuario;
