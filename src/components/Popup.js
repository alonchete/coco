
 function Popup(props){

    const hijoApadre = props.hijoApadre;

    return (props.trigger) ? (
        <div id="popupbox" class="popup">
            <div class="contenido">
                <div class="izquierda">
                    <div class="imagen">
                    <img  src={props.img} />
                    </div>
                </div>
                <div class="derecha">
                    <div class="ingredientes">
                        <h2>{props.name}</h2>
                        <p>{props.prep}</p>
                        <a href="#cierro"  onClick={() => hijoApadre(false)} >&times;</a> 
                        <button class="verReceta">VER RECETA</button>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
        
 }

 export default Popup;