export default {
  pokeapi () {
    return {
      allPokemonData: 'https://pokeapi.co/api/v2/generation/1/' // pokemon_species, types
    }
  },
  tcgApiPokemonById: (state) => (id) => {
    return `https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=${id}`
  },
  pokemonById: (state) => (id) => {
    return state.pokedex ? state.pokedex.find(pokemon => pokemon.id === id) : null
  },
  pokemonImageById: (state) => (id) => {
    id = id.toString()
    id = id.padStart(3, '0')
    console.log(id)
    return `/src/assets/images/pokemon/${id}.png`
  }
}
