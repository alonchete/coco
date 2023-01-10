
import { useState } from 'react';

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
        ObjectId: 2,
        ingredients: [] 


    },

    {
        title :'Blody Mary' ,
        ObjectId: 2,
        ingredients: [] 


    },
    {
        title:'Tom collins',
        ObjectId: 2,
        ingredients: [] 


    },
    {
        title:'Reburjito',
        ObjectId: 2,
        ingredients: [],
        alcohol: true,
        categoria: 'short drink'

    },

    {
        title:'Amanecer ecuatoriano',
        ObjectId: 2,
        ingredients: [] 

    },

    {
        title:'Atardecer filipino',
        ObjectId: 2,
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
</>
    )
}

export default Barra;
