import coctel1 from '../img/img16.jpg';


function Resultado(p1){
    let name = p1.cocktail.name;
    let prep = p1.cocktail.preparation


return(
    
            <section>
                <div class="contenedor u-margin-bottom-big">

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={coctel1} alt="..." />

                            </div>
                            <div class="flip-card-back">
                                
                                <img  src={coctel1} alt="..."/>
                                
                                <p>{name} <br/>Preparacion: {prep}</p> <br/>
                                    
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            
)
}

export default Resultado;