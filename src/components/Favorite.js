import { useState, useEffect } from "react";
import Cartas from "./Cartas";
import { findCoktel, getFavorites } from "./sevices";

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
        <h1>Tus Favoritos</h1>
        <div className="cartas"  id="favoritos">
    
    {

showFavs  === true ?  resultFav.map(function(cock){
        return <Cartas key={cock[0].name} cocktail={cock[0]} showFavs={showFavs}/> })  : ""         
    }
    <div className="barra">

        <div className="boton"><button className="elemento"  onClick={() =>{
            showFavs === false ? setShowFavs(true) : setShowFavs(false);
        }} >Mostrar Favoritos</button></div>
        </div>
    </div>
        
    </>   
)

}

export default Favorite;