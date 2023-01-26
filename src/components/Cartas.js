import coctel from '../img/img16.jpg';
import Popup from './Popup';
import { useState } from 'react';

function Cartas(p){
    const [popdata, setDatapop] = useState([]);


    let name = p.cocktail.name;
    let img = p.cocktail.img;
    let id = p.cocktail.id;

    function handleChange(event){
         setDatapop(name);
         
    }
//<img src={coctel} />
return(
    <>
   
<div class="cartas" id={id}> 
    <div class="carta" id="cierro">
        <div class="caja">
            <div class="imagen">
               <img src={img} />
            </div>
            <div class="contenido">
               <a href="#popupbox" onClick={handleChange}> {name}</a> 
            </div>
        </div>
    </div>

</div>

<div id="popupbox" class="popup">
    <div class="contenido" id={id}>
        <div class="izquierda">
            <div class="imagen">
            <img  src={img} />
            </div>
        </div>
        <div class="derecha">
            <div class="ingredientes">
                <h2>{popdata}</h2>
                <p>tumbalacasamami</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut.</p>
                <a href="#cierro" >&times;</a> 
            </div>
        </div>
    </div>
</div>

</>           
)
}

export default Cartas;