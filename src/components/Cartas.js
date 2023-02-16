import Popup from './Popup';
import {  useState } from 'react';

function Cartas(p){

    let name = p.cocktail.name;
    let img = p.cocktail.img;
    let id = p.cocktail.id;
    let prep = p.cocktail.preparation;
 
    const [clicked, setClicked] = useState(false);

    const popupAcarta = (isclicked) => {
        setClicked(isclicked)
        console.log(isclicked)
    }

return(
<>
 
<div class="cartas" id={id}> 
    <div class="carta" id="cierro">
        <div class="caja">
            <div class="imagen">
               <img src={img} />
               <div class="heart"></div>
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
        trigger={clicked}
        popupAcarta={popupAcarta}>
    </Popup> 
    
</div>



</>           

)

}

export default Cartas;