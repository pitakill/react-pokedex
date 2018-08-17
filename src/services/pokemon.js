import axios from 'axios'

const API_URL = 'https://gist.githubusercontent.com/coderdiaz/633125b46490f2ffa3b21ebeaa0cf6e2/raw/763b3d6c856010555e92adb889b6b342dfe51063'

/**
 * Function to get all pokemon
 * @return AxiosPromise
 */
let getPokemon = () => {
  return axios.get(`${API_URL}/pokemon.json`)
}

export {
  getPokemon
}
