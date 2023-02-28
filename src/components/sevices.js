export const addCocktail = (name, categoria, preparation, alcohol, page = 4 ) => fetch(`http://localhost:3002/cocktails`, {
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


const getCocktails = (searchTerm) => fetch(`${URL}?name=${searchTerm}`)
.then((response) => response.json())
.then((result) => ({ name: result.name, preparation: result.preparation, page: result.page },
  console.log(result)
  ));
  

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
  