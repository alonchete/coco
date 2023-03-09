import logo from '../assets/drink.svg';
import menu from '../assets/menu.svg';




function Nav(){
return(

<header className="nav">

<div className="nav__container">

    <h1 className="nav__logo">
        <img src={logo}/>
    </h1>

  

    <label htmlFor="menu" className="nav__label">
        <img src={menu}/>
    </label>

    <input type="checkbox" id="menu" className="nav__input"/>
    
    <div className="nav__menu">
      <a href="#home" className="nav__item">Home</a>
      <a href="#categorias" className="nav__item">Categorias</a>
      <a href="#buscar" className="nav__item">Buscar</a>
      <a href="#favoritos" className="nav__item">Favoritos</a>
     </div>

</div>
</header>

)



}

export default Nav;