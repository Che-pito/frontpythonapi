import { useState, useEffect } from "react";
import { buscarUsuario } from "../../../services/servicioUsuario.js";
export function ListadoUsuarios(){
    //Simulando un conjunto de datos que vienen del back
    let usuarios=[

        {
            id: 5,
            nombre: "Daniel Loondoño",
            telefono: "3012568956",
            ciudad: "Sabaneta"
        },
        {
            id: 58,
            nombre: "Maria del Mar",
            telefono: "3012565656",
            ciudad: "Boston"
        },
        {
            id: 1,
            nombre: "Blanca Yepes",
            telefono: "3022565656",
            ciudad: "Boston"
        },
        {
            id: 58,
            nombre: "Sebastian Campo",
            telefono: "3042565656",
            ciudad: "Itagui"
        },
        {
            id: 58,
            nombre: "Socorro Yepes",
            telefono: "3062565656",
            ciudad: "Guayabal"
        }
        
    ]
       
    const[datosApi, setDatosApi]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    // //Programas el useEfetc para garantizar que llamare al servicio y asegurar que traere los datos
    

    useEffect(function(){
        //Aca se llama al sevicio(back)
        buscarUsuario()
        .then(function(respuestaBack){
            //console.log(respuestaBack)
            setDatosApi(respuestaBack)
            setEstadoCarga(false)
            
        })           
}, [])
     if(estadoCarga==true){
        return(
            <>
            <h3>Estamos Cargando</h3>
            </>
            
        )
     }else{

        return(
            <>
    <br /><br /><br />
            <h3> LISTADO DE USUARIOS</h3>
            <div className="container">
                <div className="row row cols-1 row-cols-md-3 g-3">
                {
                //Renderizando un arreglo de objetos
                datosApi.map(function(usuario){
                    return(
                        <div className="col">
                            <div className="card h-100 shadow p-5">
                                <h5>Nombre: {usuario.nombre}</h5>
                                <h4>Ciudad: {usuario.ciudad}</h4>
                                <h3>Telefono: {usuario.telefono}</h3>
                            </div>
                        </div>
                    )
                })
            }
                </div>
            </div>
            
            
            
            </>
            )
     }


}