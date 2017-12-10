const json = true

const POKEAPI = (param) => { return json ? `../../static/json/pokeapi/${param}.json` : `https://pokeapi.co/api/v2/${param}` }
const TCGAPI = (param) => { return json ? `../../static/json/tcg/${param}.json` : `https://api.pokemontcg.io/v1/${param}` }

export default {
  api () {
    return {
      pokeapi: {
        generationById: (id) => { return POKEAPI(`generation/${id}`) },
        pokemonById: (id) => { return POKEAPI(`pokemon/${id}`) },
        pokemonSpeciesById: (id) => { return POKEAPI(`pokemon-species/${id}`) },
        typeById: (id) => { return POKEAPI(`type/${id}`) }
      },
      tgc: {
        pokemonById: (state) => (id) => { return `${TCGAPI}cards?nationalPokedexNumber=${id}` }
    }
    }
  },
  pokemonById: (state) => (id) => {
    return state.pokedex ? state.pokedex.find(pokemon => pokemon.id === id) : null
  },
  pokemonImageById: (state) => (id) => {
    id = id.toString()
    id = id.padStart(3, '0')
    return `/src/assets/images/pokemon/${id}.png`
  }
}
