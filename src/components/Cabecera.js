import barra from '../img/barra.jpg';
import barra2 from '../img/barra2.jpg';
import barra4 from '../img/barra3.jpg';
import barra3 from '../img/barra4.jpg';


function cabecera(){
    return(
<>

    <div class="cabecera">
        <div class="imagenes">
           <div class="imagen"><img src={barra}/></div> 
           <div class="imagen"><img src={barra2}/></div> 
           <div class="imagen"><img src={barra3}/></div> 
           <div class="imagen"><img src={barra4}/></div> 
        </div >
        <div class="COCOKTAIL">COCOKTAIL.</div>
    </div>

</>


    );
}


export default cabecera;