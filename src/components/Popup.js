import { useState, useEffect } from "react";
import { addCocktailFavorite, removeFavorite} from "./sevices";

 function Popup(props){


    const hijoApadre = props.hijoApadre;
    const [style, setStyle] = useState("heart2");

    const [favorite, setFavorite] = useState(false);

   

    function favoritoClick(){

    if(favorite === true){
        setFavorite(false);
        setStyle("heart2");
        removeFavorite(props.id)

    }
    else{
        setFavorite(true)
        setStyle("heart");
        addCocktailFavorite(props.id)
    }
    }


    const popupAcarta = props.popupAcarta;


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
                            {favorite === false ? "Añadir a Favoritos"
                             : "Quitar a Favoritos"}</button>
                        
                    </div>
                    
               
            </div>
        </div>
    ) : "";
        
 }

 export default Popup;