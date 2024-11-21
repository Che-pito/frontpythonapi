import { Routes, Route } from "react-router-dom"
import { Menu } from "../Components/common/Menu/Menu"
import { Home } from "../Components/pages/Home/Home"
import { Usuarios } from "../Components/pages/Usuarios/Usuarios";
import { Gastos } from "../Components/pages/Gastos/Gastos";
import { Categorias } from "../Components/pages/Categorias/Categorias";
import { MetodosPagos } from "../Components/pages/MetodosPagos/MetodosPagos";
import { ListadoUsuarios } from "../Components/pages/ListadoUsuarios/ListadoUsuarios";
import { ListadoGastos } from "../Components/pages/ListadoGastos/ListadoGastos";
import { ListadoCategorias } from "../Components/pages/ListadoCategorias/ListadoCategorias";
import { ListadoMetodosPagos } from "../Components/pages/ListadoMetodosPagos/ListadoMetodosPagos";

export function Rutas(){
    return(
    <>
        <Menu></Menu>
        <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/usuarios" element={ <Usuarios /> } />
        <Route path="/gastos" element={ <Gastos /> } />
        <Route path="/categorias" element={<Categorias/>} /> 
        <Route path="/metodosPagos" element={<MetodosPagos/>} />
        <Route path="/listausuarios" element={<ListadoUsuarios />} />
        <Route path="/listagastos" element={<ListadoGastos />} />
        <Route path="/listacategorias" element={<ListadoCategorias/>} />
        <Route path="/listametodosPagos" element={<ListadoMetodosPagos/>} />
      </Routes>
    </>
    );
}