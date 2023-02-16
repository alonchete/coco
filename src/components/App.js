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
  const [posts, setPosts] = useState([]);
  const [paginaActual, setPagina] = useState(1);
  const [alcoholList, setAlcoholList] = useState([])
  const [searchTerm, setSearchTerm] = useState('*');
  const [cocktailsLoaded, setCocktailsLoaded] = useState(false);


 var URL = `http://localhost:3002/cocktails`;
 var m = searchTerm;


  function getAlcohol (list) {
    setAlcoholList(list)
  }



  useEffect(() => {
    fetch(`${URL}?name="Mojito"`)
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });   
  }, []);


  console.log(m)
  console.log(posts)

let totalPaginas;
let paginas; 

paginas = alcoholList.map(function(x){
  return x.page;
})

totalPaginas = Math.max(...paginas) + 1;

const changeSearchTerm = useCallback((term) => {
  setSearchTerm(term);
}, [setSearchTerm]);


const addFavorite = (objectID, userid = 23) => fetch(`http://localhost:3002/cocktails`, {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      objectID,
      userid
  })
}).then(response => response.json());


  return (

      <>
        <Nav />
        <Cab />
        <Categorias/>
        <Barra  paginaActual={paginaActual} posts={posts} getAlcohol={getAlcohol} setPagina={setPagina}
         setSearchTerm={changeSearchTerm} searchTerm={searchTerm} />
        <Paginacion paginasTotales={totalPaginas} paginaActual={paginaActual} setPagina={setPagina}/>
        <Formulario />
        <Footer />
        
      </>
    
  ) 
 
}

export default App;
