
import { useState } from 'react';
import { useEffect } from 'react';

import Resultado from './Resultado';

 function Barra(){


    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([]);
    const [alcohol, setAlcohol] = useState(true);

    function handleChange (event){
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

 searchCocktail = posts.find(function(x){
    return x.name === searchTerm || x.id === searchTerm
    })

 alcoholFilter = posts.filter(function(x){
return x.alcohol === alcohol
    })

let filter = [];
filter = alcoholFilter
var search = Array(searchCocktail);
console.log(search)
console.log(filter)


    return(
        
<>
<div class="barra">
    <div class="container">
      <div class="input-container">
          <input type="text" placeholder="Search..." defaultValue="Mojit" onChange={handleChange}  />
          <span>
              <i class="fa-solid fa-magnifying-glass"/>
          </span>          
      </div>

    </div>
    <button onClick={alcoholClick}>{alcohol === true ? "Mostrar sin alcohol" : "Mostrar con alcohol"}</button>

</div>

    <p align="center">{ posts.some(function(x){ return x.name === searchTerm }) || posts.some(function(x){ return x.id === searchTerm}) 
    ? "Resultados para " : "Sin coincidencias para " } {searchTerm} {
} </p>
<div class="cartas">

    {    
    
    (posts.some(function(x){ return x.name === searchTerm}) || posts.some(function(x){ return x.id === searchTerm})  ? 
     search.map(function(x){ return( <div class="carta" id={x.id}> <Resultado cocktail={searchCocktail}/> </div> )})
     :filter.map(function(x){ return( <div class="carta" id={x.id}> <Resultado cocktail={x}/> </div> )})) 
     
     }


</div>
</>


    )
}

export default Barra;
