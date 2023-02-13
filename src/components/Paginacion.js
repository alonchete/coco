import Pagina from "./Pagina";
import { useState } from "react";

export default function Paginacion({paginasTotales, paginaActual, setPagina}){
    const pages = [];
    const [isclicked, setClicked] = useState();


    const styleUL = {
        display:"flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        flexDirection: "row",

        textDecoration: "none",
        transition: "background-color .3s",
    }
    const styleLI = {
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        flexDirection: "row",
        textDecoration: "none",
        transition: "background-color .3s",

        
    }

    for(let i = 0; i < paginasTotales; i++){
        pages.push(<div style={styleLI} key={i}><Pagina numeroPagina={i} seleccionada={paginaActual === i} setPagina={setPagina}/></div>)
    }
    return (
    <>
    <div style={styleUL}>{pages}</div>
    </>
    )
}