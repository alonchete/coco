import coctel from '../img/img16.jpg';

 function Popup(props){
        
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
                        
                        <a href="#cierro" >&times;</a> 
                    </div>
                </div>
            </div>
        </div>
    ) : "";
        
 }

 export default Popup;