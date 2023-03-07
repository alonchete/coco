import Nav from './Nav';
import Cab from './Cabecera';
import Categorias from './Categorias';
import Barra from './Barra';
import Formulario from './Formulario';
import Footer from './Footer';
import Paginacion from './Paginacion';
import '../sass/main.scss';
import {AllCocktailsAlc, getCocktails} from './sevices'
import { useEffect, useState } from 'react';

function App() {
  const [allCocktails, setAllCocktails] = useState([]);
  const [posts, setPosts] = useState([]);
  const [paginaActual, setPagina] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [alcohol, setAlcohol] = useState(false);
  const [totalPaginas, setTotalPaginas] = useState();
  const [cocktelPag, setCocktelPag] = useState(0);


 var URL = `http://localhost:3002/cocktails`;
 
useEffect(() => {
  fetch(`${URL}?name_like=${searchTerm}`)
    .then((res) => res.json())
    .then((result) => {
      setPosts(result);
    });
}, [searchTerm, searchTerm > 1]);

useEffect(() => {
  if(alcohol === false){setPagina(1)}
  getCocktails(alcohol, paginaActual).then((result) => {setPosts(result)});
  AllCocktailsAlc(alcohol).then((result) => {setAllCocktails(result)})
}, [searchTerm === '', alcohol, paginaActual]);

return (

      <>
        <Nav />
        <Cab />
        <Categorias/>
        <Barra  paginaActual={paginaActual} posts={posts} setPagina={setPagina}
         setSearchTerm={setSearchTerm} setAlcohol={setAlcohol} alcohol={alcohol}/>
        <Paginacion setTotalPaginas={setTotalPaginas} allCocktails={allCocktails} alcohol={alcohol} 
        paginasTotales={totalPaginas} paginaActual={paginaActual} setPagina={setPagina} posts={posts} searchTerm={searchTerm}/>
        <Formulario AllCocktailsAlc={AllCocktailsAlc} allCocktails={allCocktails} setCocktelPag={setCocktelPag} cocktelPag={cocktelPag} />
        <Footer />        
      </>
    
  ) 
 
}

export default App;
