import coctel from '../img/img16.jpg';

 function Popup(){
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
                <h2>White Russian Lady</h2>
                <p>Ginebra 3cl | Licor de cereza 1,5cl | Licor triple seco 0,75cl | Granadina 1cl
                | Zumo de limón 1,5cl | Zumo de piña 12cl</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut.</p>
                <a href="#cierro" >&times;</a> 
            </div>
        </div>
    </div>
</div>

    )

 }

 export default Popup;