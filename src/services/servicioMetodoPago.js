export async function registrarMetodoPago(datosMetodoPago){
    const URL="http://localhost:8000/metodosPagos"
    let peticion={
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosMetodoPago)
    }
    let respuestaInicial=await fetch(URL, peticion)
    let metodosPagos=await respuestaInicial.json()

    return (metodosPagos)
    
}

export async function buscarMetodoPago(){
    const URL = "http://localhost:8000/metodosPagos"
    let peticion={
        method:'GET'
    }
    let respuestaInicial=await fetch(URL,peticion)
    let metodosPagos=await respuestaInicial.json()

    return (metodosPagos)
}