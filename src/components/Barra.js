
import { useState } from 'react';
import Resultados from './Resultados';

const cocteles = [

    {
        title:'Mojito',
        ObjectId: 0,
        ingredients: [] 

        

    },

    {
        title:'Sex on the beach',
        ObjectId: 1,
        ingredients: [] 



    },
    {
        title:'Cuba libre',
        ObjectId: 3,
        ingredients: [] 


    },

    {
        title :'Blody Mary' ,
        ObjectId: 4,
        ingredients: [] 


    },
    {
        title:'Tom collins',
        ObjectId: 5,
        ingredients: [] 


    },
    {
        title:'Reburjito',
        ObjectId: 6,
        ingredients: [],
        alcohol: true,
        categoria: 'short drink'

    },

    {
        title:'Amanecer ecuatoriano',
        ObjectId: 7,
        ingredients: [] 

    },

    {
        title:'Atardecer filipino',
        ObjectId: 8,
        ingredients: [] 

    },



]


function Barra(){


    const [searchTerm, setSearchTerm] = useState('');

    function handleChange (event){
        return setSearchTerm(event.target.value);
    }

    let title;
    title = cocteles.find(function(coctel){
        return coctel.title === searchTerm
       })

    return(
<>
<div class="barra">
    <div class="container">
      <div class="input-container">
          <input type="text" placeholder="Search..."  onChange={handleChange} />
          <span>
              <i class="fa-solid fa-magnifying-glass"/>
          </span>
      </div>

    </div>
</div>
    <p align="center">{cocteles.includes(title) ? "Resultados para " : "Sin coincidencias para "} {searchTerm}</p>
    {cocteles.includes(title) ?  <Resultados coct={searchTerm} /> : " "}
</>


    )
}

export default Barra;
