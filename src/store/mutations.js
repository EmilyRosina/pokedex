import Vue from 'vue'

export default {
  // SET
  set_pokemon_data (state, pokedex) {
    for (let pokemon of pokedex) {
      let id = Number(pokemon.url.split('/')[6])
      let imageId = id.toString().padStart(3, '0')
      let pokemonData = {
        id,
        name: pokemon.name,
        images: {
          main: `/src/assets/images/pokemon/${imageId}.png`,
          sprites: {}
        },
        cardData: {}
      }
      Vue.set(state.pokedex, pokemon.name, pokemonData)
    }
  },
  set_generation_data (state, generation) {
    Vue.set(state, 'generation', generation)
  },
  set_types_data (state, types) {
    for (const type of types) {
      let id = Number(type.url.split('/')[6])
      let typeData = {
        id,
        name: type.name
      }
      Vue.set(state.types, id, typeData)
    }
  },
  set_search_name (state, name) {
    Vue.set(state.searchParams, 'name', name)
  },
  set_search_type (state, typeId) {
    Vue.set(state.searchParams, 'type', typeId)
  },

  // ADD
  add_pokemon_data (state, payload) {
    Object.asssign(state.pokedex[payload.pokemonId], payload.data)
  },

  add_types_data (state, payload) {
    state.types[payload.typeId].class = payload.data.class
    state.types[payload.typeId].damage = payload.data.damage
    state.types[payload.typeId].pokemon = payload.data.pokemon
    // Vue.set(state.types[typeData.typeId], '', typeData)
  },
  add_pokemon_card_data (state, payload) {
    Vue.set(state.pokedex[payload.pokemonId], 'cardData', payload.data)
  },

  // CLEAR
  clear_search (state) {
    Vue.set(state.searchParams, 'name', '')
    Vue.set(state.searchParams, 'type', '')
    Vue.set(state.searchParams, 'strength', '')
    Vue.set(state.searchParams, 'weakness', '')
  }
}
