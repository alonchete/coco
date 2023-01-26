import coctel from '../img/img16.jpg';

 function Popup(p){
    let name = p.name
    return(
        
<div id="popupbox" class="popup">
    <div class="contenido">
        <div class="izquierda">
            <div class="imagen">
            <img  src={coctel} />
            </div>
        </div>
        <div class="derecha">
            <div class="ingredientes">
                <h2>{name}</h2>
                <p>{}</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut.</p>
                <a href="#cierro" >&times;</a> 
            </div>
        </div>
    </div>
</div>

    )

 }

 export default Popup;