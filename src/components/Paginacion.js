import Pagina from "./Page";
import { useState } from "react";

export default function Paginacion({paginasTotales, paginaActual, setPagina}){
    const pages = [];
    const [isclicked, setClicked] = useState();


    const style = {
        display: "inline-block"
        }

    for(let i = 0; i < paginasTotales; i++){
        pages.push(<li style={style} key={i}><Pagina numeroPagina={i} seleccionada={paginaActual === i} setPagina={setPagina}/></li>)
    }
    return (
    <>
    <ul>{pages}</ul>
    </>
    )
}