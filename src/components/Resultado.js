import coctel1 from '../img/img16.jpg';


function Resultado(x){

    const prop = x.prop;
return(
    
<div class="carta">
            <section>
                <div class="contenedor u-margin-bottom-big">

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={coctel1} alt="..." />

                            </div>
                            <div class="flip-card-back">
                                
                                <img  src={coctel1} alt="..."/>
                                
                                <p> <b>{prop.title}</b><br/>{prop.ObjectId}<br/>
                                    Zumo de tomate 210 ml<br/>
                                    Zumo de limón 15 ml<br/>
                                    Salsa Tabasco dos gotas<br/>
                                    Salsa Worcestershire tres gotas<br/>
                                </p> 
                                    
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            </div>
            
)
}

export default Resultado;