export default function Pagina({numeroPagina, paginaActual, seleccionada, setPagina}){
  const style = {
    backgroundColor: "black",
    color:"white",
    padding: "8px 10px",
    border:"none"
  }

  const handleClick = (e) => {
    setPagina(numeroPagina)
  }
    return (
    <>
    <button class="page__button" onClick={handleClick} style={ seleccionada ?  style : {
        backgroundColor: "darkgoldenrod",
        color:"black",
        padding: "8px 10px",
        border:"none"
      }}>{numeroPagina}
    </button>
    </>
    )
}