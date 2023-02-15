
import { useState } from 'react';
import { useEffect } from 'react';

import Cartas from './Cartas';
import Popup from './Popup';
import Pagina from './Pagina';

 function Barra({paginaActual, posts, getAlcohol, setPagina     }){


    const [searchTerm, setSearchTerm] = useState('*');
    const [alcohol, setAlcohol] = useState(false);
    const [message, setMessage] = useState('')

 
    function messageChange(){
        
        if( posts.some(function(x){return x.name.toLowerCase().startsWith(searchTerm.toLowerCase()) }) && searchTerm.length > 0){
            setMessage("Mostrando resultados");
        }else {setMessage("Sin coincidencias: mostrando otros cocteles")    
        }
    }

    useEffect(() => {
        messageChange();
    }, [searchTerm]);

  

    function handleChange (event){
        return setSearchTerm(event.target.value);
    }

 
 

    let searchCocktail;
    let alcoholFilter;


    searchCocktail = posts.filter(function(x){
    return x.name.toLowerCase().startsWith(searchTerm.toLowerCase()) 
    })

 alcoholFilter = posts.filter(function(x){
    return x.alcohol === alcohol;
    })

var Afilter = [];
 Afilter = alcoholFilter;

var filter = Afilter.filter(function(x){
    return x.page === paginaActual
})

    var search = []
    search = searchCocktail;

    function alcoholClick(filtro){
        alcohol === false ? setAlcohol(true) : setAlcohol(false);
    }

    useEffect(() => {
        getAlcohol(Afilter)
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
    (posts.some(function(x){return x.name.toLowerCase().startsWith(searchTerm.toLowerCase())}) && searchTerm.length > 0? 
     search.map(function(x){
        return(<Cartas cocktail={x}/> )})
     :filter.map(function(x) { 
        return( <Cartas cocktail={x}/> )}))}

</div>
</>


    )
}

export default Barra;
