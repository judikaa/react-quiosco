import { createRef, useState } from "react"
import { Link } from "react-router-dom" 
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";

export default function Registro() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const paswordConfirmationRef = createRef();

    const [errores, setErrores] = useState([])
    const {registro} = useAuth({middleware: 'guest', url:'/'})

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: paswordConfirmationRef.current.value
        }
        registro(datos, setErrores)
    }

  return (
    <>
        <h1 className="text-4xl font-black">Crea tu cuenta</h1>
        <p>Crea tu cuenta llenando el formulario</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form 
                onSubmit={handleSubmit}
                noValidate
            >
                {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}
                <div className="mb-4">
                    <label 
                        className="text-slate-800"
                        htmlFor="name"
                    >Nombre:</label>
                    <input 
                        type="text"
                        id="name" 
                        className="mt-2 block p-3 bg-gray-50 w-full"
                        name="name"
                        placeholder="Tu nombre"
                        ref={nameRef}
                    />
                </div>

                <div className="mb-4">
                    <label 
                        className="text-slate-800"
                        htmlFor="email"
                    >Email:</label>
                    <input 
                        type="email"
                        id="email" 
                        className="mt-2 block p-3 bg-gray-50 w-full"
                        name="email"
                        placeholder="Tu email"
                        ref={emailRef}
                    />
                </div>

                <div className="mb-4">                    
                    <label 
                        className="text-slate-800"
                        htmlFor="password"
                    >Password:</label>
                    <input 
                        type="password"
                        id="password" 
                        className="mt-2 block p-3 bg-gray-50 w-full"
                        name="password"
                        placeholder="Tu password"
                        ref={passwordRef}
                    />
                </div>

                <div className="mb-4">                    
                    <label 
                        className="text-slate-800"
                        htmlFor="password_confirmation"
                    >Repetir Password:</label>
                    <input 
                        type="password"
                        id="password_confirmation" 
                        className="mt-2 block p-3 bg-gray-50 w-full"
                        name="password_confirmation"
                        placeholder="Repetir password"
                        ref={paswordConfirmationRef}
                    />
                </div>

                <input 
                    type="submit"
                    value="Crear cuenta"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                
                />            
            </form>
        </div>

        <nav className="mt-5">
            <Link to="/auth/login">
                ¿Ya tienes cuenta? Inicia sesión
            </Link>
        </nav>        
    </>
  )
}
