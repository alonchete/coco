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

        <h1>favorites siuuu</h1>
        <div className="cartas">
<<<<<<< HEAD

        {
            showFavs  === true ?  resultFav.map(function(x){
            return <Cartas cocktail={x[0]}/> })  : ""         
        }
        <div className="barra" id="buscar">

            <div className="boton"><button className="elemento"  onClick={() =>{
                showFavs === false ? setShowFavs(true) : setShowFavs(false)
            }} >Show Favs</button></div>
            </div>
=======
    
    {

showFavs  === true ?  resultFav.map(function(x){
        return <Cartas cocktail={x[0]} showFavs={showFavs}/> })  : ""         
    }
    <div class="barra" id="buscar">

        <div className="boton"><button className="elemento"  onClick={() =>{
            showFavs === false ? setShowFavs(true) : setShowFavs(false);
        }} >Show Favs</button></div>
>>>>>>> 256352062bf8413e28ad7f40bf78526edfaeb80d
        </div>
        
    </>   
)

}

export default Favorite;