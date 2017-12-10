import axios from 'axios'

export default {
  GET_POKEMON ({ commit, getters }) {
    axios.get(getters.pokeapi.allPokemon)
      .then(response => {
        commit('set_pokemon_data', response.data.pokemon_species)
        commit('set_types_data', response.data.types)
      })
      .catch(error => {
        console.error(error)
      })
  },
  GET_TYPE_DATA ({ commit, getters }, id) {
    axios.get(getters.pokeapi.typeById(id))
      .then(response => {
        commit('add_types_data', { id, data: response.data })
      })
      .catch(error => {
        console.error(error)
      })
  },
  GET_CARD_DATA ({ commit, getters }, id) {
    axios.get(getters.tcgApiPokemonById(id))
      .then(response => {
        commit('add_pokemon_card_data', { id, data: response.data })
      })
      .catch(error => {
        console.error(error)
      })
  }
}
