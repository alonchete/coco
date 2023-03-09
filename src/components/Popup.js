import { useState, useEffect } from "react";
import { addCocktailFavorite, removeFavorite, getFavorites} from "./sevices";

 function Popup(props){


    const hijoApadre = props.hijoApadre;
    const [style, setStyle] = useState();
    const [favs, setFavs] = useState([]);
    const [favorite, setFavorite] = useState();

    const popupAcarta = props.popupAcarta;
    useEffect(() => {
        getFavorites().then((result) => {setFavs(result)})

        
        if(favs.some(function(isFav){return isFav.cocktelId === props.id})){
            setStyle("heart");
        }else{
            setStyle("heart2")
        } 
        
    }, [favorite, popupAcarta])


    


    function favoritoClick(){
    if(favs.some(function(isFav){return isFav.cocktelId === props.id})){

        setFavorite(false)

        removeFavorite(props.id)

    }
    else{       

        setFavorite(true)
        addCocktailFavorite(props.id)



    }
    }

    return (props.trigger) ? (
        <div id="popupbox" className="popup">
            <div className="contenido">

                <a href="#cierro"  onClick={() => hijoApadre(false)} >&times;</a> 

            <a href="#cierro"  onClick={() => 
            
                popupAcarta(false)} >&times;</a> 

                
                    <div className="imagen">
                        <img  src={props.img} />
                        <div className={style}></div>
                    </div>

                    <div className="ingredientes">
                        <p className="nombre_coco">{props.name}</p>
                        <p>{props.prep}</p>
                        <button className="favorito"
                         onClick={favoritoClick}>
                            {"Favorito"}</button>
                        
                    </div>
                    
               
            </div>
        </div>
    ) : "";
        
 }

 export default Popup;