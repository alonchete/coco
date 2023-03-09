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
    }

return(
<>
 
<div className="cartas" id={id} key ={id}> 
    <div className="carta" id="cierro">
        <div className="caja">
            <div className="imagen">
               <img src={img} />
            </div>
            <div className="contenido">
               <a id='nombre' href="#popupbox"  onClick={() => setClicked(true)}>{name}</a> 
            </div>
        </div>
    </div>    


    <Popup 
        id={id}
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