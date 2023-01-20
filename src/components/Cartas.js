import coctel from '../img/img16.jpg';

function Cartas(){

//<img src={coctel} />
return(
    <>
   

<div class="cartas">
    <div class="carta" id="cierro">
        <div class="caja">
            <div class="imagen">
               <img src={coctel} />
            </div>
            <div class="contenido">
               <a href="#popupbox">White Russian Lady</a> 
            </div>
        </div>
    </div>
</div>



</>           
)
}

export default Cartas;