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
    return state.pokedex ? Object.values(state.pokedex).find(pokemon => pokemon.id === id) : null
  },
  pokemonImageById: (state) => (id) => {
    return `/src/assets/images/pokemon/${id}.png`
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
