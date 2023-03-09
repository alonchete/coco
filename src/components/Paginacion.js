import { useEffect } from "react";
import Pagina from "./Pagina";

export default function Paginacion({setTotalPaginas, allCocktails, paginasTotales, paginaActual, setPagina}){
    const pages = [];

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

    useEffect(() => {
        setTotalPaginas(Math.max(...allCocktails.map(function(list){return list.page})) + 1);
    }, [allCocktails][paginaActual])

    
if(paginasTotales > 2 ){
    for(let i = 1; i < paginasTotales; i++){
        pages.push(<div style={styleLI} key={i}><Pagina numeroPagina={i} seleccionada={paginaActual === i} setPagina={setPagina}/></div>)
    }
}
    return (
    <>
    <div style={styleUL}>{pages}</div>
    </>
    )
}