import coctel from '../img/img16.jpg';
import Popup from './Popup';
import { useEffect, useState } from 'react';

function Cartas(p){

    let name = p.cocktail.name;
    let img = p.cocktail.img;
    let id = p.cocktail.id;
    let prep = p.cocktail.preparation;
 
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(false);
        console.log(">>>>>>>>>>>>>>>", name, clicked)
    },[clicked])
   

return(
<>
 
<div class="cartas" id={id}> 
    <div class="carta" id="cierro">
        <div class="caja">
            <div class="imagen">
               <img src={img} />
            </div>
            <div className="contenido">
               <a id='nombre' href="#popupbox"  onClick={() => setClicked(true)}>{name}</a> 
            </div>
        </div>
    </div>

    <Popup 
        name={name} 
        img={img} 
        prep={prep} 
        trigger={clicked}>
    </Popup> 
</div>



</>           

)

}

export default Cartas;