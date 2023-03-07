import {addCocktail} from './sevices'
import { useState, useEffect } from 'react';
function Container({AllCocktailsAlc, allCocktails, setCocktelPag, cocktelPag}){
    const [cocktelName, setCocktelName] = useState('');
    const [cocktelCat, setCocktelCat] = useState(1);
    const [cocktelPrep, setCocktelPrep] = useState('');
    const [cocktelAlc, setCocktelAlc] = useState(true);


    function handleChange (event){
         setCocktelName(event.target.value);
    }
    function PrepChange (event){
        setCocktelPrep(event.target.value);
   }
    function CatChange (event){
        setCocktelCat(event.target.value);
  }
  function alcoholChange (event){
    setCocktelAlc(event.target.value)   ;
    cocktelAlc === false ? setCocktelAlc(true) : setCocktelAlc(false)
    AllCocktailsAlc(cocktelAlc)
    }

    const agregarCocktel= ( () =>{
   AllCocktailsAlc(cocktelAlc)
    setCocktelPag(Math.max(...allCocktails.map(function(x){return x.page})))
        addCocktail(cocktelName, cocktelCat, cocktelPrep, cocktelAlc, cocktelPag)
    }) 
 
    return(

        <>
            <div class="contenedor">
                <div class="form signup">
                    <h2>Añade tu cocoktel!!</h2>
                    <div class="inputBox">
                        <input type="text" required="required" onChange={handleChange} />
                        <i class="fa-regular fa-user"></i>
                        <spam>Nombre de tu cocktail</spam>
                    </div>
                    <div class="inputBox">
                        <input type="radio" required="required" id="Categoría1" onChange={CatChange}  
                        value="Categoría1" checked={cocktelCat === "Categoría1" ? true : false}     />
                        <spam>Categoría1</spam>
                        <input type="radio" required="required" id="Categoría2" onChange={CatChange}
                         value="Categoría2" checked={cocktelCat === "Categoría2" ? true : false} />
                        <spam>Categoría2</spam>
                        <input type="radio" required="required" id="Categoría3"onChange={CatChange}
                         value="Categoría3" checked={cocktelCat === "Categoría3" ? true : false} />
                        <spam>Categoría3</spam>
                        <input type="radio" required="required" id="Categoría4" onChange={CatChange} 
                        value="Categoría4" checked={cocktelCat === "Categoría4" ? true : false} />
                        <spam>Categoría4</spam>
                    </div>
                    <div class="inputBox">
                        <input type="text" required="required" onChange={PrepChange} />
                        <i class="fa-solid fa-lock"></i>
                        <spam>Ingredientes</spam>
                    </div>
                    <div class="inputBox">
                    <input type="radio" required="required" id="true"  value="true" 
                    checked={cocktelAlc === true ? true : false} onChange={alcoholChange} />
                        <spam>Con alcohol</spam>
                    <input type="radio" required="required" id="false"  value="false"
                     checked={cocktelAlc === false ? true : false}  onChange={alcoholChange}  />
                        <spam>Sin alcohol</spam>          
                    </div>
                    
                    <div class="inputBox">
                        <input type="submit" value="Agregar cocoktel" onClick={agregarCocktel} />
                    </div>

                </div>
            </div>
        </>
    
    )}
    
    export default Container;