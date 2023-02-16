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

