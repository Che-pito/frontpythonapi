import { useState, useEffect } from "react";
import { buscarCategoria } from "../../../services/servicioCategoria.js";
export function ListadoCategorias(){

    const [datosApi, setDatosApi]=useState(null)
    const [estadoCarga, setEstadoCarga]=useState(true)

    // //Programas el useEfetc para garantizar que llamare al servicio y asegurar que traere los datos
    useEffect(function(){
        //Aca se llama ak servicio(back)
        buscarCategoria()
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
                <h3>LISTADO DE CATEGORIAS</h3>
                <div className="container">
                    <div className="row row cols-1 row-cols-md-3 g-3">{
                        //Renderizando un arreglo de objetos
                        datosApi.map(function(categoria){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow p-5">
                                        <h5>Nombre Categoria:{categoria.nombreCategoria}</h5>
                                        <h4>Descripción:{categoria.descripcion}</h4>
                                        <h3>Foto Icono: {categoria.fotoIcono}</h3>
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