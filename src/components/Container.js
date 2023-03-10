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
}else {
    addCocktail(cocktelName, cocktelCat, cocktelPrep, cocktelAlc,(cocktelByAlc[cocktelByAlc.length - 1].page + addPage()))
window.location.reload()
    
}

    }) 

 
    return(

        <>
            <div className="contenedor" id="formulario">
                <div className="form signup">
                    <h2>A??ade tu cocoktel!!</h2>
                    <div className="inputBox">
                        <input type="text" required="required" defaultValue={"Mojito"} onChange={handleChange} />
                        <i className="fa-regular fa-user"></i>
                        <span>Nombre de tu cocktail</span>
                    </div>
                    <div className="inputBox">
                        <input type="radio" required="required" id="Categor??a1" onChange={CatChange}  
                        value="Categor??a1" checked={cocktelCat === "Categor??a1" ? true : false}     />
                        <span>Short Drinks</span>
                        <input type="radio" required="required" id="Categor??a2" onChange={CatChange}
                         value="Categor??a2" checked={cocktelCat === "Categor??a2" ? true : false} />
                        <span>Long Drinks</span>
                        <input type="radio" required="required" id="Categor??a3"onChange={CatChange}
                         value="Categor??a3" checked={cocktelCat === "Categor??a3" ? true : false} />
                        <span>Aperitivos</span>
                        <input type="radio" required="required" id="Categor??a4" onChange={CatChange} 
                        value="Categor??a4" checked={cocktelCat === "Categor??a4" ? true : false} />
                        <span>Digestivos</span>
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