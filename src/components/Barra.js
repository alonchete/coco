
import { useState } from 'react';
import { useEffect } from 'react';

import Cartas from './Cartas';
import Popup from './Popup';
import Pagina from './Pagina';

 function Barra({paginaActual, posts, getAlcohol, setPagina, setSearchTerm, searchTerm}){

    const [alcohol, setAlcohol] = useState(false);
    const [message, setMessage] = useState('');
    const [value, setValue] = useState(searchTerm);
 
    function messageChange(){
        if( posts.some(function(x){return x.name.toLowerCase().startsWith(searchTerm.toLowerCase()) }) && searchTerm.length > 0){
            setMessage("Mostrando resultados");
        }else {setMessage("Sin coincidencias: mostrando otros cocteles")    
        }
    }

    useEffect(() => {
            setSearchTerm(value);
    }, [value]);


    useEffect(() => {
        messageChange();
    }, [searchTerm]);

    function handleChange (event){
        return setValue(event.target.value);
    }

    function alcoholClick(filtro){
        alcohol === false ? setAlcohol(true) : setAlcohol(false);
    }

    useEffect(() => {
        if(alcohol === false){
            setPagina(1)
        }
    }, [alcohol]);

   
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

    <p align="center">{ message }  {
} </p>
<div class="cartas">


    {
     posts.map(function(x){
        return(<Cartas cocktail={x}/> )})  
    }

</div>
</>


    )
}

export default Barra;
