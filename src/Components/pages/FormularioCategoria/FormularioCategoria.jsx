import { useState, useEffect } from "react";
import { registrarCategoria } from "../../../services/servicioCategoria.js";

export function FormularioCategoria() {
  const [nombreCategoria, setNombreCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fotoIcono, setFotoIcono] = useState('');

  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState(null);

  const[errores, setErrores] = useState({})

  // useEffect para controlar el envío de datos al backend
  useEffect(() => {
    if (formularioEnviado === true) {
      console.log("Enviando datos al backend...");
      registrarCategoria(datosFormulario)
        .then((respuestaBack) => {
          console.log(respuestaBack);
        })
        .catch((error) => {
          console.error("Error al registrar categoría:", error);
        });
      setFormularioEnviado(false);
    }
  }, [formularioEnviado]);

  function procesarFormulario(evento) {
    evento.preventDefault();
    
    //Validar campos 
    const nuevosErrores={};

    if (!nombreCategoria.trim()) nuevosErrores.nombreCategoria="El nombre es obligatorio"

    setErrores(nuevosErrores);

    if(Object.keys(nuevosErrores).length===0){
    const datosCategoria = {
      nombreCategoria,
      descripcion,
      fotoIcono,
    };
    setDatosFormulario(datosCategoria);
    setFormularioEnviado(true);
  }
}

  return (
    <>
      <br />
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h3>Registro de categoría: </h3>
            <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>
              <div className="row">
                <div className="col-12">
                  <label className="form-label">Nombre de la categoría: <span className="text-danger">*</span> </label>
                  <input
                    type="text"
                    className={`form-control ${errores.nombreCategoria ? "is-invalid" : ""}`}
                    value={nombreCategoria}
                    onChange={(evento) => setNombreCategoria(evento.target.value)}
                  />
                  {errores.nombreCategoria && <div className="invalid-feedback">{errores.nombreCategoria}</div>}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <label className="form-label">Descripción:</label>
                  <textarea
                    className="form-control"
                    value={descripcion}
                    onChange={(evento) => setDescripcion(evento.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <label className="form-label">Foto ícono (URL):</label>
                  <input
                    type="text"
                    className="form-control"
                    value={fotoIcono}
                    onChange={(evento) => setFotoIcono(evento.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-outline-success my-3 w-100">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}