import { useState, useEffect } from "react"
import { registrarUsuario } from "../../../services/servicioUsuario.js"

export function FormularioUsuario(){

    const[nombreUsuario,setNombreUsuario]=useState('')
    const[edadUsuario,setEdadUsuario]=useState('')
    const[telefonoUsuario,setTelefonoUsuario]=useState('')
    const[correoUsuario,setCorreoUsuario]=useState('')
    const[contraseñaUsuario,setContraseñaUsuario]=useState('')
    const[fechaUsuario,setFechaUsuario]=useState('')
    const[ciudadUsuario,setCiudadUsuario]=useState('')

    const[formularioEnviado,setFormularioEnviado]=useState(false)
    const[datosFormulario,setDatosFormulario]=useState(null)

    const[errores, setErrores] = useState({})
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //useEfect para controlar el llamado al api
    useEffect(function(){
        if(formularioEnviado==true){
            console.log("Me voy para el back a consumir")
            //console.log(datosFormulario)
            registrarUsuario(datosFormulario)
            .then(function(respuestaBack){
                console.log(respuestaBack)
            })
            setFormularioEnviado(false)

        }
    },[formularioEnviado])


    function procesarFormulario(evento){
        evento.preventDefault()

        //Validar campos 
        const nuevosErrores={};

            if (!nombreUsuario.trim()) nuevosErrores.nombreUsuario="El nombre es obligatorio";
            if (!emailRegex.test(correoUsuario)) nuevosErrores.correoUsuario="El correo es obligatorio";
            if (!contraseñaUsuario.trim()) nuevosErrores.contraseñaUsuario="La contraseña es obligatoria"

            setErrores(nuevosErrores);

        if(Object.keys(nuevosErrores).length===0){
           const datosUsuario={
            nombre:nombreUsuario,
            edad:edadUsuario,
            telefono:telefonoUsuario,
            correo:correoUsuario,
            contraseña:contraseñaUsuario,
            fechaRegistro:fechaUsuario,
            ciudad:ciudadUsuario
         }
             setDatosFormulario(datosUsuario)
             setFormularioEnviado(true)
            }
         
            
        }
    

    return(

        <>
            <br />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Registro de usuario: </h3>
                        <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Nombre:<span className="text-danger">*</span> </label>
                                    <input 
                                    type="text"
                                     className={`form-control ${errores.nombreUsuario ? "is-invalid" : ""}`} 
                                     value={nombreUsuario} 
                                     onChange={function(evento){setNombreUsuario(evento.target.value)}}
                                     />
                                     {errores.nombreUsuario && <div className="invalid-feedback">{errores.nombreUsuario}</div>}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Edad: </label>
                                    <input
                                     type="number"
                                      className="form-control" 
                                      value={edadUsuario}
                                      onChange={function(evento){setEdadUsuario(evento.target.value)}}
                                      />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Telefono: </label>
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    value={telefonoUsuario}
                                    onChange={function(evento){setTelefonoUsuario(evento.target.value)}}
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Correo:<span className="text-danger">*</span> </label>
                                    <input 
                                    type="text"
                                   className={`form-control ${errores.correoUsuario ? "is-invalid" : ""}`}  
                                   value={correoUsuario}
                                   onChange={function(evento){setCorreoUsuario(evento.target.value)}}
                                   />
                                   {errores.correoUsuario && <div className="invalid-feedback">{errores.correoUsuario}</div>}
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Contraseña:<span className="text-danger">*</span> </label>
                                    <input 
                                    type="password" 
                                    className={`form-control ${errores.contraseñaUsuario ? "is-invalid" : ""}`}  
                                    value={contraseñaUsuario}
                                    onChange={function(evento){setContraseñaUsuario(evento.target.value)}}
                                    />
                                    {errores.contraseñaUsuario && <div className="invalid-feedback">{errores.contraseñaUsuario}</div>}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Fecha Registro: </label>
                                    <input 
                                    type="date" 
                                    className="form-control" 
                                    value={fechaUsuario}
                                    onChange={function(evento){setFechaUsuario(evento.target.value)}}
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Ciudad: </label>
                                    <input
                                     type="text"
                                    className="form-control"
                                    value={ciudadUsuario}
                                    onChange={function(evento){setCiudadUsuario(evento.target.value)}}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-success my-3 w-100">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    )


}