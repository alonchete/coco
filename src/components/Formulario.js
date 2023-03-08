import Container from './Container';

function Formulario({AllCocktailsAlc,allCocktails, setCocktelPag, cocktelPag}){

    return(

        
        <div class="formulario">
        <Container  AllCocktailsAlc={AllCocktailsAlc} allCocktails={allCocktails} setCocktelPag={setCocktelPag} cocktelPag={cocktelPag} />
        </div>   
    
    )
    
    
    }
    
    export default Formulario;