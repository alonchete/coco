import { useState, useEffect } from "react";

 function Popup(props){

<<<<<<< HEAD
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

     
=======
    const popupAcarta = props.popupAcarta;
>>>>>>> 8f873f38a0c1ab3d3ca2eb9665dc898b404f8efa

    return (props.trigger) ? (
        <div id="popupbox" class="popup">
            
            <div class="contenido">
<<<<<<< HEAD
                <a href="#cierro"  onClick={() => hijoApadre(false)} >&times;</a> 
=======
            <a href="#cierro"  onClick={() => popupAcarta(false)} >&times;</a> 
>>>>>>> 8f873f38a0c1ab3d3ca2eb9665dc898b404f8efa
                
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