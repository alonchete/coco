import Nav from './Nav';
import Cab from './Cabecera';
import Categorias from './Categorias';
import Barra from './Barra';
import Footer from './Footer';
import Paginacion from './Paginacion';


import '../sass/main.scss';
import { useEffect, useState } from 'react';




function App() {
const [paginaActual, setPagina] = useState(0)
  
  return (


      <>
        <Nav />
        <Cab />
        <Categorias />
        <Barra />
        <Paginacion paginasTotales={20} paginaActual={paginaActual} setPagina={setPagina}/>
        <Footer />
        
      </>
    
  ) 
 
}

export default App;
