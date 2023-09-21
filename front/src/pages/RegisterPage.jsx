import { useForm } from 'react-hook-form';
import '../index.css';
import React, { useState } from 'react';




function RegisterPage() {
    const [response, setResponse] = useState(null);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const data ={
        email: email,
        password: password
    }
    const options ={
        method: "POST", 
        headers: {"content-type":"application/json"},
        body: JSON.stringify(data)
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        
        try {
           fetch('http://localhost:8000/user', options)
            .then(res => res.json())
            .then(data => console.log(data))
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
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}

                        placeholder='Email' />


                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}

                        placeholder='Password' />



                    <button type='submit' className='button'>
                        Register
                    </button>


                </form>

            </div>
        </div>
    );
}

export default RegisterPage;