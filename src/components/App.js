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
  const [cocktelPag, setCocktelPag] = useState(0);


 var URL = `http://localhost:3002/cocktails`;
 let m = searchTerm;
 
    useEffect(() => {
      fetch(`${URL}?name_like=${searchTerm}`)
        .then((res) => res.json())
        .then((result) => {
          setPosts(result);
        });
    }, [searchTerm, searchTerm > 1]);
    
 function AllCocktailsAlc(fill){
  fetch(`${URL}?alcohol=${fill}`)
  .then((res) => res.json())
  .then((result) => {
    setAllCocktails(result);
  });
 }



 function lastPageCocktails(page){

    fetch(`${URL}?page=${totalPaginas}&alcohol=${alcohol}`)
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });  

 }

  useEffect(() => {

    AllCocktailsAlc(alcohol);
    if(alcohol === false){setPagina(1)}

    fetch(`${URL}?page=${paginaActual}&alcohol=${alcohol}`)
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });  

  }, [searchTerm === '', alcohol, paginaActual]);

  const updateCocktail = (id,name) => fetch(`http://localhost:3002/cocktails/90`, {
    method: 'PATCH',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
       name: "sdsa",
    })
  }).then(response => response.json());
    
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
        <button onClick={updateCocktail} >cccc</button>
        
      </>
    
  ) 
 
}

export default App;
