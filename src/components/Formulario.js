import Container from './Container';

function Formulario({AllCocktailsAlc,allCocktails, setCocktelPag, cocktelPag}){

    return(

        
        <div className="formulario">
        <Container  AllCocktailsAlc={AllCocktailsAlc} allCocktails={allCocktails} setCocktelPag={setCocktelPag} cocktelPag={cocktelPag} />
        </div>   
    
    )
    
    
    }
    
    export default Formulario;