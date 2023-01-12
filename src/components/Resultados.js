
import Resultado from './Resultado';


function Resultados(prop){
    let coctel= prop.coctel;
    console.log(coctel)
    return(
        <>
            <Resultado prop={coctel} />
         </>
                
    )   
}

export default Resultados;