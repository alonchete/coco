import { useState, useEffect } from "react";

 function Popup(props){

    const hijoApadre = props.hijoApadre;
    const [style, setStyle] = useState("heart2");

    const [favorite, setFavorite] = useState(false);

    const changeStyle = () => { 
            setStyle("heart");
      };


    

    function favoritoClick(event){
    favorite === false ? setFavorite(true) : setFavorite(false);
    if(favorite === false){
        setStyle("heart2");
    }
    else{
        setStyle("heart");
    }
        console.log(favorite)
    }

     

    return (props.trigger) ? (
        <div id="popupbox" class="popup">
            
            <div class="contenido">
                <a href="#cierro"  onClick={() => hijoApadre(false)} >&times;</a> 
                
                    <div class="imagen">
                        <img  src={props.img} />
                        <div class={style}></div>
                    </div>

                    <div class="ingredientes">
                        <p className="nombre_coco">{props.name}</p>
                        <p>{props.prep}</p>
                        <button class="favorito" onClick={favoritoClick}>{favorite === true ? "Añadir a Favoritos" : "Quitar a Favoritos"}</button>
                        
                    </div>
                    
               
            </div>
        </div>
    ) : "";
        
 }

 export default Popup;