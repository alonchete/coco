import barra from '../img/barra.jpg';
import barra2 from '../img/barra2.jpg';
import barra4 from '../img/barra3.jpg';
import barra3 from '../img/barra4.jpg';


function cabecera(){
    return(
<>

    <div className="cabecera" id="home">
        <div className="imagenes">
           <div className="imagen"><img src={barra}/></div> 
           <div className="imagen"><img src={barra2}/></div> 
           <div className="imagen"><img src={barra3}/></div> 
           <div className="imagen"><img src={barra4}/></div> 
        </div >
        <div className="COCOKTAIL"><p>COCO<span>KTAIL.</span></p></div>
    </div>

</>


    );
}


export default cabecera;