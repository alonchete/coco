import Nav from './Nav';
import Cab from './Cabecera';
import Categorias from './Categorias';
import Barra from './Barra';
import Footer from './Footer';
import Paginacion from './Paginacion';


import '../sass/main.scss';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [paginaActual, setPagina] = useState(1);
  const [alcoholList, setAlcoholList] = useState([])


  function getAlcohol (list) {
    setAlcoholList(list)
  }

  useEffect(() => {
    fetch(`http://localhost:3000/cocktails`)
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });   
  }, []);



let totalPaginas;
let paginas; 
console.log(alcoholList);

paginas = alcoholList.map(function(x){
  return x.page
})

totalPaginas = Math.max(...paginas) + 1;

  return (

      <>
        <Nav />
        <Cab />
        <Categorias/>
        <Barra  paginaActual={paginaActual} posts={posts} getAlcohol={getAlcohol} setPagina={setPagina} />
        <Paginacion paginasTotales={totalPaginas} paginaActual={paginaActual} setPagina={setPagina}/>
        <Footer />
        
      </>
    
  ) 
 
}

export default App;
