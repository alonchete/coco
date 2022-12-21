import { useState } from 'react';

import Categoria from './Categoria';

const categorias = [

    {
        title:'Categoria1',
        ObjectId: 0,
        

    },

    {
        title:'Categoria2',
        ObjectId: 1


    },
    {
        title:'Cartegoria3',
        ObjectId: 2

    }

]

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
        ingredients: [] 

    }

]





function Categorias(){
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange (event){
        return setSearchTerm(event.target.value);
    }

    let title;
    title = cocteles.find(function(coctel){
        return coctel.title === searchTerm
       })
    
 
    return(

        <div class="categorias">
            <input type='text' onChange={handleChange} defaultValue="Mojito"  />
           <p>{cocteles.includes(title) ? "Resultados para " : "Sin coincidencias para "} {searchTerm}</p>

         
    
         {categorias.map(function(x){
            return(
                    <div key={x.ObjectId} class="card">
                        <Categoria cart={x}  />
                    </div>
                 )

             })  
         }</div> 

         )

}

export default Categorias;



