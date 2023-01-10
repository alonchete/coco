import logo from '../assets/drink.svg';
import menu from '../assets/menu.svg';
import NavItem from './NavItems';

const elements = ["Home","Categorias","Algo","Contacto"];

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

        {elements.map(function(elemento){
          return(
          <NavItem item={elemento} />
          );
                }
             )
        }
     </div>

</div>
</header>

)



}

export default Nav;
