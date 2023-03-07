var URL = `http://localhost:3002/cocktails`;


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

export const AllCocktailsAlc = (alcohol) => (
  fetch(`${URL}?alcohol=${alcohol}`)
  .then((res) => res.json())

)

export const getCocktails = (alcohol, pagina) =>
 ( fetch(`${URL}?alcohol=${alcohol}&page=${pagina}`)
  .then((res) => res.json())
)
