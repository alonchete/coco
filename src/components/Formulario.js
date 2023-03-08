import Container from './Container';

function Formulario({AllCocktailsAlc,allCocktails, setCocktelPag, cocktelPag, allData}){

    return(

        
        <div class="formulario">
        <Container allData={allData} AllCocktailsAlc={AllCocktailsAlc} allCocktails={allCocktails} setCocktelPag={setCocktelPag} cocktelPag={cocktelPag} />
        </div>   
    
    )
    
    
    }
    
    export default Formulario;