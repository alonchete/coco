
import { useState } from 'react';
import { useEffect } from 'react';

import Cartas from './Cartas';
import Popup from './Popup';
import Pagina from './Pagina';

 function Barra({ cocktails,setAlcohol,alcohol,setSearchTerm, paginaActual}){

    const [verMas, setVerMas] = useState(2);
 

    function handleChange (event){
        return setSearchTerm(event.target.value);
    }

    function alcoholClick(){
        alcohol === true ? setAlcohol(false) : setAlcohol(true);

    }

   
var count = 0;

   function VerMas(){
    verMas === 2 ? setVerMas(1):setVerMas(2);
   }

   useEffect(() => {
    setVerMas(2)
   }, [paginaActual])
    return(
        
<>
<div className="barra" id="buscar" >
    
    <div className="input-container" >
        <input type="text" placeholder="¿Que le apetece tomar?..."  onChange={handleChange}  />
        <span>
            <i className="fa-solid fa-magnifying-glass"/>
        </span>          
    </div>

   
    <div className="boton" onClick={alcoholClick}>
        <button className='elemento'>{alcohol === true ? "Mostrar sin alcohol" : "Mostrar con alcohol"}</button>
        
    </div>
    
</div>

    <p align="center">{  }  {
} </p>
<div className="cartas"key={posts.name} >


    {
     cocktails.map(function(x){
        count++;
        return(cocktails.length > 20 ? (count < cocktails.length/verMas ? <Cartas cocktail={x}/> : " ") : <Cartas cocktail={x}/> )})          
    }
    </div><br/>

        <div className="barra" id="buscar" >
            {posts.length > 20  ?<div className="boton"><button className='elemento'  onClick={VerMas}>{verMas === 2 ? "Ver mas ": "Ver menos"}
            </button> 
        </div> : " "}
    </div>

</>


    )
}

export default Barra;
