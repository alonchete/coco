
import { useState } from 'react';
import { useEffect } from 'react';

import Cartas from './Cartas';
import Popup from './Popup';

 function Barra(){


    const [searchTerm, setSearchTerm] = useState('*');
    const [posts, setPosts] = useState([]);
    const [alcohol, setAlcohol] = useState(true);
    const [message, setMessage] = useState(' ')

    function messageChange(){
        if( posts.some(function(x){ return x.name.toLowerCase().startsWith(searchTerm.toLowerCase()) })){
            setMessage("Mostrando resultados")
        }else {setMessage("Sin coincidencias")    
        }

    }

    useEffect(() => {
        if(searchTerm === ""){
            setSearchTerm("*");
        }
    }, [searchTerm]);


    function handleChange (event){
        messageChange()
        return setSearchTerm(event.target.value);
    }

    

    function alcoholClick(event){
    alcohol === false ? setAlcohol(true) : setAlcohol(false)
        console.log(alcohol)
    }

    let searchCocktail;
    let alcoholFilter;
    
    useEffect(() => {
        fetch(`http://localhost:3000/cocktails`)
          .then((res) => res.json())
          .then((result) => {
            setPosts(result);
          });   
      }, []);

 searchCocktail = posts.filter(function(x){
    return x.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    })

 alcoholFilter = posts.filter(function(x){
return x.alcohol === alcohol
    })

    var filter = [];
    filter = alcoholFilter;
    var search = []
    search = searchCocktail;
    console.log(alcohol)


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
    (filter.some(function(x){return x.name.toLowerCase().startsWith(searchTerm.toLowerCase())  }) ? 
     search.map(function(x){return(<Cartas cocktail={x}/> )})
     :filter.map(function(x){return( <Cartas cocktail={x}/> )}))}

</div>
</>


    )
}

export default Barra;
