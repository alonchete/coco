
import { useState } from 'react';
import { useEffect } from 'react';

import Cartas from './Cartas';
import Popup from './Popup';
import Pagina from './Pagina';

 function Barra({ posts,setAlcohol,alcohol , setSearchTerm}){

    const [verMas, setVerMas] = useState(2);
 

    function handleChange (event){
        return setSearchTerm(event.target.value);
    }

    function alcoholClick(){
        alcohol === false ? setAlcohol(true) : setAlcohol(false);
    }

   
var count = 0;
var mess = "XXXX";

   function VerMas(){
    
    verMas === 2 ? setVerMas(1):setVerMas(2);
   }
    return(
        
<>
<div class="barra" id="buscar">
    
    <div class="input-container" >
        <input type="text" placeholder="¿Que le apetece tomar?..."  onChange={handleChange}  />
        <span>
            <i class="fa-solid fa-magnifying-glass"/>
        </span>          
    </div>

   
    <div class="boton" onClick={alcoholClick}>
        <button className='elemento'>{alcohol === true ? "Mostrar sin alcohol" : "Mostrar con alcohol"}</button>
        
    </div>
    
</div>

    <p align="center">{  }  {
} </p>
<div class="cartas">


    {
     posts.map(function(x){
        count++;
        return(posts.length > 20 ? (count < posts.length/verMas ? <Cartas cocktail={x}/> : " ") : <Cartas cocktail={x}/> )})
 
          
    }
    <br/>{posts.length > 20 ? <button onClick={VerMas}>{verMas === 2 ? "Ver mas ": "Ver menos"}</button> : " "}

</div>
</>


    )
}

export default Barra;
