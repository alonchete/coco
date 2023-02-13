
import Cardbg from './Cardbg';
import CardCont from './CardContext';

function card(prop){

    const cart = prop.cart;

    return(
     <>   
       <Cardbg cart={cart}/>
       <CardCont cart={cart}/>
    </>


    
    )
}


export default card;