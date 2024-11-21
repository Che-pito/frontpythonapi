export async function registrarCategoria(datosCategoria){
    const URL="http://localhost:8000/categorias"
    let peticion={
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosCategoria)
    }
    let respuestaInicial=await fetch(URL, peticion)
    let categorias=await respuestaInicial.json()

    return (categorias)
    
}

export async function buscarCategoria(){
    const URL = "http://localhost:8000/categorias"
    let peticion={
        method:'GET'
    }
    let respuestaInicial=await fetch(URL,peticion)
    let categorias=await respuestaInicial.json()

    return (categorias)
}