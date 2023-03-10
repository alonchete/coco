import Popup from './Popup';
import {  useState, useEffect} from 'react';
import { AllCocktailsAlc } from './sevices';

function Cartas(prop, favorites){

    let name = prop.cocktail.name;
    let img = prop.cocktail.img;
    let id = prop.cocktail.id;
    let prep = prop.cocktail.preparation;
 
    const [clicked, setClicked] = useState(false);

    const popupAcarta = (isclicked) => {
        setClicked(isclicked)   
        window.location.reload()
 
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
        favorites={favorites}
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