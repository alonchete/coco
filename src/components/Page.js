export default function Pagina({numeroPagina, paginaActual, seleccionada, setPagina}){
  const style = {
    backgroundColor: "red"
  }

  const handleClick = (e) => {
    setPagina(numeroPagina)
}
    return (
    <>
    <button onClick={handleClick} style={ seleccionada ?  style : {}}>{numeroPagina}</button>
    </>
    )
}