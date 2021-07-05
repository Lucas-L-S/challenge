var PORT = process.env.PORT || 5000
const cors = require('cors');
const axios = require('axios');
const express = require('express');
const app = express();


let url = 'https://api.github.com/users/takenet/repos?per_page=50&sort=created&direction=asc'
app.use(cors());

app.get('/', async (res) => {
  try {
      const { data } = await axios(url);
      const filter = data.map(lista =>{
        if(lista['language'] == 'C#'){
          return lista
        }
      })
      var repos = filter.filter(function (el) {
        return el != null;
      });
      repos = repos.splice(0, 5)
      return res.json(repos);
  } catch (error) {
    console.error(error);
  }
})

app.listen(PORT);