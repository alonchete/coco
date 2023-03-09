
import coctel1 from '../img/categoria4.jpg';


function cardbg(prop){
  const cart = prop.cart;
    
return(
    <div className="card-bg">

      <img src={cart.img} alt="..."/>

    </div>

)


}

export default cardbg;