
import { useState } from 'react';
import Resultados from './Resultados';

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

    function handleChange (event){
        return setSearchTerm(event.target.value);
    }

    let title;
    const cocktail = async function(){
    const res =  await fetch('http://localhost:3000/cocktails/4');
    const data = await res.json();
    return data
    }
  cocktail();
    
    return(
<>
<div class="barra">
    <div class="container">
      <div class="input-container">
          <input type="text" placeholder="Search..." defaultValue="Mojit" onChange={handleChange} />
          <span>
              <i class="fa-solid fa-magnifying-glass"/>
          </span>
      </div>

    </div>
</div>
    <p align="center">{cocteles.includes(title) ? "Resultados para " : "Sin coincidencias para "} {searchTerm}</p>

    {cocteles.includes(title) ?
    
     <div><Resultados coctel={title}/></div> 
     
     : " "}


</>


    )
}

export default Barra;
