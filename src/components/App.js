import Nav from './Nav';
import Cab from './Cabecera';
import Categorias from './Categorias';
import Barra from './Barra';
import Formulario from './Formulario';
import Footer from './Footer';
import Paginacion from './Paginacion';
import '../sass/main.scss';
import { useEffect, useState, useCallback } from 'react';

function App() {
  const [allCocktails, setAllCocktails] = useState([]);
  const [posts, setPosts] = useState([]);
  const [paginaActual, setPagina] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [alcohol, setAlcohol] = useState(false);
  const [totalPaginas, setTotalPaginas] = useState();

 var URL = `http://localhost:3002/cocktails`;
 let paginas;
 
console.log(alcohol)

  useEffect(() => {
    fetch(`${URL}?name_like=${searchTerm} `)
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
      
  }, [searchTerm]);
    
 function AllCocktails(fill){
  fetch(`${URL}?alcohol=${fill}`)
  .then((res) => res.json())
  .then((result) => {
    setAllCocktails(result);
  });
 }

  useEffect(() => {

    AllCocktails(alcohol);
    if(alcohol === false){setPagina(1)}

    fetch(`${URL}?page=${paginaActual}&alcohol=${alcohol}`)
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });  

  }, [searchTerm === '', alcohol, paginaActual]);


  return (

      <>
        <Nav />
        <Cab />
        <Categorias/>
        <Barra  paginaActual={paginaActual} posts={posts} setPagina={setPagina}
         setSearchTerm={setSearchTerm} setAlcohol={setAlcohol} alcohol={alcohol}/>
         -
        <Paginacion setTotalPaginas={setTotalPaginas} allCocktails={allCocktails} alcohol={alcohol} paginasTotales={totalPaginas} paginaActual={paginaActual} setPagina={setPagina}/>
        <Formulario />
        <Footer />
        
      </>
    
  ) 
 
}

export default App;
