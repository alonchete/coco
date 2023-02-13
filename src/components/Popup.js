
 function Popup(props){

    const popupAcarta = props.popupAcarta;

    return (props.trigger) ? (
        <div id="popupbox" class="popup">
            
            <div class="contenido">
            <a href="#cierro"  onClick={() => popupAcarta(false)} >&times;</a> 
                
                    <div class="imagen">
                        <img  src={props.img} />
                    </div>

                    <div class="ingredientes">
                        <p className="nombre_coco">{props.name}</p>
                        <p>{props.prep}</p>
                        <button class="verReceta">VER RECETA</button>
                    </div>
               
            </div>
        </div>
    ) : "";
        
 }

 export default Popup;