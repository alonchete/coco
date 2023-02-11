
 function Popup(props){

    const hijoApadre = props.hijoApadre;

    return (props.trigger) ? (
        <div id="popupbox" class="popup">
            
            <div class="contenido">
            <a href="#cierro"  onClick={() => hijoApadre(false)} >&times;</a> 
                <div class="izquierda">
                    <div class="imagen">
                    <img  src={props.img} />
                    </div>
                </div>
                <div class="derecha">
                    <div class="ingredientes">
                        <p className="nombre_coco">{props.name}</p>
                        <p>{props.prep}</p>
                        <button class="verReceta">VER RECETA</button>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
        
 }

 export default Popup;