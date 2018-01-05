// const json = true

const POKEAPI = (param, json = true) => {
  return json
  ? `static/json/pokeapi/${param}.json`
  : `https://pokeapi.co/api/v2/${param}`
}
const TCGAPI = (param, json = true) => {
  return json
  ? `static/json/tcg/${param}.json`
  : `https://api.pokemontcg.io/v1/${param}`
}
/* taken from webpack.base.config */
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

export default {
  api () {
    return {
      tcg: {
        pokemonById: (id) => { return TCGAPI(`cards?nationalPokedexNumber=${id}`, false) }
      },
      pokeapi: {
        generationById: (id) => { return POKEAPI(`generation/${id}`) },
        pokemonById: (id) => { return POKEAPI(`pokemon/${id}`, false) },
        pokemonSpeciesById: (id) => { return POKEAPI(`pokemon-species/${id}`, false) },
        typeById: (id) => { return POKEAPI(`type/${id}`) }
      }
    }
  },
  pokemonById: (state) => (id) => {
    return state.pokedex ? Object.values(state.pokedex).find(pokemon => pokemon.id === id) : null
  },
  pokemonImageById: (state) => (id) => {
    id = id.toString().length !== 3 ? id.toString().padStart(3, '0') : id.toString()
    return resolve(`src/assets/img/pokemon/${id}.png`)
  },
  types (state) {
    return state.types
  },
  matched_onName (state) {
    let matchedNames
    let pokemon = {}
    if (state.pokedex && state.searchParams.name.length >= 3) {
      matchedNames = Object.keys(state.pokedex).filter(pokemon => pokemon.includes(state.searchParams.name))
      for (const match of matchedNames) {
        pokemon[match] = state.pokedex[match]
      }
    }
    return state.pokedex && state.searchParams.name.length >= 3 ? {
      total: matchedNames.length,
      matches: pokemon
    } : null
  },
  matched_onType (state) {
    return state.types && state.searchParams.type !== 0 ? {
      total: Object.keys(state.types[state.searchParams.type].pokemon).length,
      matches: state.types[state.searchParams.type].pokemon
    } : null
  }
}
