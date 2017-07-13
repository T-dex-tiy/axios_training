import axios from 'axios';


module.exports = {
  fetchStarWars: (charaters => {
    const encodedCharaters = window.encodedCharaters('http://localhost:3008');

    return axios.get(encodedCharaters)
    .then(response => {
      return response;
    }
    )
  })
}
