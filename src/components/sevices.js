var URL = `http://localhost:3002/cocktails`;
var URL_Fav = `http://localhost:3002/favorites`;


export const addCocktail = (name, categoria, preparation, alcohol, page ) => fetch(`http://localhost:3002/cocktails`, {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      
      name,
      categoria,
      preparation,
      alcohol,
      page
  })
}).then(response => response.json());


export const addCocktailFavorite = (cocktelId, id = cocktelId) => fetch(`${URL_Fav}`, {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      cocktelId,
      id
  })
}).then(response => response.json());

export const removeFavorite = (cocktelId) => 
(fetch(`${URL_Fav}/${cocktelId}`, {
  method: 'DELETE'
}).then(response => response.json()));


export const AllCocktailsAlc = (alcohol) => (
  fetch(`${URL}?alcohol=${alcohol}`)
  .then((res) => res.json())

)

export const getCocktails = (alcohol, pagina) =>
 ( fetch(`${URL}?alcohol=${alcohol}&page=${pagina}`)
  .then((res) => res.json())
)

export const getAllCocktails = () =>
 ( fetch(`${URL}`)
  .then((res) => res.json())
)

export const getFavorites = () =>(
  fetch(`${URL_Fav}`)
  .then((res) => res.json())
)


export const findCoktel = (idCoktel) =>(
  fetch(`${URL}?id=${idCoktel}`)
  .then((res) => res.json())
)
