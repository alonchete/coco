import Categoria from './Categoria';
import categoria1 from '../img/categoria1.jpg';
import categoria2 from '../img/categoria2.png';
import categoria3 from '../img/categoria3.jpg';
import categoria4 from '../img/categoria4.jpg';

const categorias = [

    {
        title:'Short Drinks',
        ObjectId: 0,
        img:categoria1

    },

    {
        title:'Long drinks',
        ObjectId: 1,
        img:categoria2

    },
    {
        title:'Aperitivos',
        ObjectId: 2,
        img:categoria3
    },

    {
        title:'Digestivos',
        ObjectId: 3,
        img:categoria4
    },

]

function Categorias(){
    return( 
        <div className="categorias" id="categorias">

         {categorias.map(function(x){
            return(
                    <div key={x.ObjectId} className="card">
                        <Categoria cart={x}  />
                    </div>
                 )

             })  
         }
        </div> 

         )

}

export default Categorias;



