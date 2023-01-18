
import { useState } from 'react';
import { useEffect } from 'react';

import Resultado from './Resultado';

const cocteles = [

    {
        title:'Mojito',
        ObjectId: 0,
        ingredients: ['Azucar moreno','Gaseosa', 'Ron'],
        alcohol: 'miau'

        

    },

    {
        title:'Sex on the beach',
        ObjectId: 1,
        ingredients: ['Azucar moreno','Gaseosa', 'Ron'],
        alcohol: 'si'




    },
    {
        title:'Cuba libre',
        ObjectId: 3,
        ingredients: ['Azucar moreno','Gaseosa', 'Ron'],
        alcohol: 'si'



    },

    {
        title :'Blody Mary' ,
        ObjectId: 4,
        ingredients: ['Azucar moreno','Gaseosa', 'Ron'],
        alcohol: 'si'



    },
    {
        title:'Tom collins',
        ObjectId: 5,
        ingredients: ['Azucar moreno','Gaseosa', 'Ron'],
        alcohol: 'si'



    },
    {
        title:'Reburjito',
        ObjectId: 6,
        ingredients: ['Azucar moreno','Gaseosa', 'Ron'],
        alcohol: 'si',
        categoria: 'short drink'

    },

    {
        title:'Amanecer ecuatoriano',
        ObjectId: 7,
        ingredients: ['Azucar moreno','Gaseosa', 'Ron'],
        alcohol: 'si'


    },

    {
        title:'Atardecer filipino',
        ObjectId: 8,
        ingredients: ['Azucar moreno','Gaseosa', 'Ron'],
        alcohol: 'si'
 

    },



]


 function Barra(){


    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([]);
    const [alcohol, setAlcohol] = useState(true);

    function handleChange (event){
        return setSearchTerm(event.target.value);
    }

    let searchCocktail;
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

const search = Array(searchCocktail);
console.log(search)

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
</div>

<button onClick="dsa"></button>
    <p align="center">{ posts.some(function(x){ return x.name === searchTerm }) || posts.some(function(x){ return x.id === searchTerm}) 
? "Resultados para " : "Sin coincidencias para " } {searchTerm} {
} </p>
<div class="cartas">

    {(posts.some(function(x){ return x.name === searchTerm}) || posts.some(function(x){ return x.id === searchTerm})  ? 
     search.map(function(x){ return( <div class="carta" id={x.id}> <Resultado cocktail={searchCocktail}/> </div> )})
     : posts.map(function(x){ return( <div class="carta" id={x.id}> <Resultado cocktail={x}/> </div> )})) }


</div>
</>


    )
}

export default Barra;
