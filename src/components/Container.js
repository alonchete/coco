import {addCocktail} from './sevices'
import { useState, useEffect } from 'react';
import {AllCocktailsAlc, getCocktails, getAllCocktails} from './sevices'

function Container({AllCocktailsAlc, allCocktails, setCocktelPag, cocktelPag}){
    const [cocktelName, setCocktelName] = useState('');
    const [cocktelCat, setCocktelCat] = useState();
    const [cocktelPrep, setCocktelPrep] = useState('');
    const [cocktelAlc, setCocktelAlc] = useState(true);
    const [cocktelByAlc, setCocktelByAlc] = useState([]);
    const [allData, setAllData] = useState([]);


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
    }

    useEffect(() => {
        AllCocktailsAlc(cocktelAlc).then((result) => {setCocktelByAlc(result)});
     
      }, [cocktelAlc]);


      useEffect(() => {
        getAllCocktails().then((result) => {setAllData(result)});
      }, [addCocktail]);


      let paginas = cocktelByAlc.filter(function(x){
        return x.page === cocktelByAlc[cocktelByAlc.length - 1].page;
      })

      function addPage(){
       
          if(paginas.length > 25) return 1;
          else return 0;
    
      }

     const agregarCocktel=  ( () =>{
        console.log(addPage())
        console.log(allData)
        console.log(cocktelByAlc[cocktelByAlc.length - 1].page)
if(allData.some(function(x){return x.name === cocktelName}) || cocktelPrep === "" || cocktelName === "" || cocktelCat === undefined){
    console.log("nombre repetido")
}else {
    addCocktail(cocktelName, cocktelCat, cocktelPrep, cocktelAlc,(cocktelByAlc[cocktelByAlc.length - 1].page + addPage()))
window.location.reload()
    
}

    }) 

 
    return(

        <>
            <div className="contenedor">
                <div className="form signup">
                    <h2>Añade tu cocoktel!!</h2>
                    <div className="inputBox">
                        <input type="text" required="required" defaultValue={"Mojito"} onChange={handleChange} />
                        <i className="fa-regular fa-user"></i>
                        <span>Nombre de tu cocktail</span>
                    </div>
                    <div className="inputBox">
                        <input type="radio" required="required" id="Categoría1" onChange={CatChange}  
                        value="Categoría1" checked={cocktelCat === "Categoría1" ? true : false}     />
                        <span>Categoría1</span>
                        <input type="radio" required="required" id="Categoría2" onChange={CatChange}
                         value="Categoría2" checked={cocktelCat === "Categoría2" ? true : false} />
                        <span>Categoría2</span>
                        <input type="radio" required="required" id="Categoría3"onChange={CatChange}
                         value="Categoría3" checked={cocktelCat === "Categoría3" ? true : false} />
                        <span>Categoría3</span>
                        <input type="radio" required="required" id="Categoría4" onChange={CatChange} 
                        value="Categoría4" checked={cocktelCat === "Categoría4" ? true : false} />
                        <span>Categoría4</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" required="required" onChange={PrepChange} />
                        <i className="fa-solid fa-lock"></i>
                        <span>Ingredientes</span>
                    </div>
                    <div className="inputBox">
                    <input type="radio" required="required" id="true"  value="true" 
                    checked={cocktelAlc === true ? true : false} onChange={alcoholChange} />
                        <span>Con alcohol</span>
                    <input type="radio" required="required" id="false"  value="false"
                     checked={cocktelAlc === false ? true : false}  onChange={alcoholChange}  />
                        <span>Sin alcohol</span>          
                    </div>
                    
                    <div className="inputBox">
                        <input type="submit" value="Agregar cocoktel" onClick={agregarCocktel} />
                    </div>

                </div>
            </div>
        </>
    
    )}
    
    export default Container;