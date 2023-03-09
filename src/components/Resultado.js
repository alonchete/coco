import coctelimg from '../img/img16.jpg';


function Resultado(p){
    let name = p.cocktail.name;
    let prep = p.cocktail.preparation
    let img = p.cocktail.img;


return(
    
            <section>
                <div className="contenedor u-margin-bottom-big">

                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={img} alt="..." />

                            </div>
                            <div className="flip-card-back">
                                
                                <img  src={img} alt="..."/>
                                
                                <p>{name} <br/>Preparacion: {prep}</p> <br/>
                                    
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            
)
}

export default Resultado;