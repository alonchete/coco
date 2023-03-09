import logo from '../assets/drink.svg';
import menu from '../assets/menu.svg';




function Nav(){
return(

<header className="nav">

<div className="nav__container">

    <h1 className="nav__logo">
        <img src={logo}/>
    </h1>

  

    <label for="menu" className="nav__label">
        <img src={menu}/>
    </label>

    <input type="checkbox" id="menu" className="nav__input"/>
    
    <div class="nav__menu">
      <a href="#home" className="nav__item">Home</a>
      <a href="#categorias" className="nav__item">Categorias</a>
      <a href="#buscar" className="nav__item">Buscar</a>
      <a href="#contacto" className="nav__item">Contacto</a>
     </div>

</div>
</header>

)



}

export default Nav;