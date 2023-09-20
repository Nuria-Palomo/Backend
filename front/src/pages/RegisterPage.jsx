import { useForm } from 'react-hook-form';
import '../index.css';



function RegisterPage() {
    const { register, handleSubmit } = useForm();

    return (
        <div className="container">
            <div className="registro">
                <h1>Registro</h1>

                <form onSubmit={handleSubmit((values) => {
                    console.log(values);
                })}>

                    <input type="text" {...register("username", { required: true })}

                        placeholder='Name' />


                    <input type="email" {...register("email", { required: true })}
                        placeholder='Email' />

                    <input type="password" {...register("password", { required: true })}
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