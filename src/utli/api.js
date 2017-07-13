import axios from 'axios';

function getCharacters(characters){
  return axios.get('http://localhost:3008/people');
}


const api = {
  fetchStarWars: (characters) => {
    return axios.all([getCharacters(characters)])
    .then((arr) => {
      return{
        charaters: arr[0].data,
      }
    })
  }
}



module.exports = api
