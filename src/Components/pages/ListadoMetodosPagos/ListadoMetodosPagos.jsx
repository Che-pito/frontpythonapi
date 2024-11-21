import { useState, useEffect } from "react";
import { buscarMetodoPago } from "../../../services/servicioMetodoPago.js";
export function ListadoMetodosPagos(){

    const [datosApi, setDatosApi]=useState(null)
    const [estadoCarga, setEstadoCarga]=useState(true)

    // //Programas el useEfetc para garantizar que llamare al servicio y asegurar que traere los datos
    useEffect(function(){
        //Aca se llama ak servicio(back)
        buscarMetodoPago()
        .then(function(respuestaBack){
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
                <br/><br/><br/>
                <h3>LISTADO DE METODOS DE PAGO</h3>
                <div className="container">
                    <div className="row row cols-1 row-cols-md-3 g-3">{
                        //Renderizando un arreglo de objetos
                        datosApi.map(function(metodopago){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow p-5">
                                        <h4>Nombre Metodos de pago:{metodopago.nombreMetodo}</h4>
                                        <h4>Descripción:{metodopago.descripcion}</h4>
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