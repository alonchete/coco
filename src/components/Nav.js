import logo from '../assets/drink.svg';
import menu from '../assets/menu.svg';




function Nav(){
return(

<header class="nav">

<div class="nav__container">

    <h1 class="nav__logo">
        <img src={logo}/>
    </h1>

  

    <label for="menu" class="nav__label">
        <img src={menu}/>
    </label>

    <input type="checkbox" id="menu" class="nav__input"/>
    
    <div class="nav__menu">
      <a href="#" class="nav__item">Home</a>
      <a href="#categorias" class="nav__item">Categorias</a>
      <a href="#buscar" class="nav__item">buscar</a>
      <a href="#" class="nav__item">contacto</a>
     </div>

</div>
</header>

)



}

export default Nav;
