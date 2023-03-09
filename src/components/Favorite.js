import { useState, useEffect } from "react";
import Cartas from "./Cartas";
import { findCoktel } from "./sevices";

function Favorite({favorites}){
  
    const [resultFav, setFavRes] = useState(favorites.map(favorite => ({ objectID: favorite.cocktelId})));
    const [showFavs, setShowFavs] = useState(false);
    useEffect(() => {
       
            favorites.forEach(async (favorites, i) => {
                const fav = await findCoktel(favorites.cocktelId);
                setFavRes(favs => {
                    const newFavs = [];
                    for (let j = 0; j < favs.length; j++) {
                        newFavs[j] = favs[j];
                    }
                    newFavs[i] = { ...fav, favoriteId: favorites.cocktelId };
                    return newFavs;
                });
            });
        } 
      , [showFavs]);

     


return(    
        <>
        <h1>favorites siuuu</h1>
        <div className="cartas">
            {console.log(resultFav)}
    
    {

showFavs  === true ?  resultFav.map(function(x){
        return <Cartas cocktail={x[0]}/> })  : ""         
    }
    <div class="barra" id="buscar">

        <div className="boton"><button className="elemento"  onClick={() =>{
            showFavs === false ? setShowFavs(true) : setShowFavs(false)
        }} >Show Favs</button></div>
        </div>
    </div>
        
    </>   
)

}

export default Favorite;