

import Categoria from './Categoria';

const categorias = [

    {
        title:'Short Drinks',
        ObjectId: 0,
        

    },

    {
        title:'Long drinks',
        ObjectId: 1


    },
    {
        title:'Aperitivos',
        ObjectId: 2

    },

    {
        title:'Digestivos',
        ObjectId: 3

    },

]

function Categorias(){
    return( 
        <div class="categorias">

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



