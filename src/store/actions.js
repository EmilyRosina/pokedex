import axios from 'axios'

export default {
  GET_POKEDEX ({commit, dispatch, getters}, id) {
    axios.get(getters.api.pokeapi.generationById(id))
    .then(response => {
      let generation = {
        id: response.data.id,
        name: response.data.name,
        mainRegion: response.data.main_region,
        versionGroups: response.data.version_groups
      }
      commit('set_generation_data', generation)
      commit('set_pokemon_data', response.data.pokemon_species)
      commit('set_types_data', response.data.types)
      return getters.types
    })
    .then(response => {
      for (const type in response) {
        dispatch('ADD_TYPE_DATA', response[type].id)
      }
    })
    .catch(error => {
      console.error(error)
    })
  },
  ADD_POKEMON_DATA ({ commit, getters }, payload) {
    axios.get(getters.api.pokeapi.pokemonById(payload.id))
      .then(response => {
        commit('add_pokemon_data', { name: payload.name, data: response.data })
      })
      .catch(error => {
        console.error(error)
      })
  },
  ADD_TYPE_DATA ({ commit, getters }, id) {
    // console.log('ADD_TYPE_DATA', id)
    axios.get(getters.api.pokeapi.typeById(id))
      .then(response => {
        let typeData = {
          class: {
            id: Number(response.data.move_damage_class.url.split('/')[6]),
            name: response.data.move_damage_class.name
          },
          damage: {},
          pokemon: {}
        }
        for (const damageRelation in response.data.damage_relations) {
          typeData.damage[damageRelation] = response.data.damage_relations[damageRelation].length > 0 ? {} : null
          if (response.data.damage_relations[damageRelation].length > 0) {
            let damageTypes = response.data.damage_relations[damageRelation]
            for (const damageType in damageTypes) {
              let id = Number(damageTypes[damageType].url.split('/')[6])
              typeData.damage[damageRelation][id] = damageTypes[damageType].name
            }
          }
        }
        let pokemon = response.data.pokemon.filter(poke => Number(poke.pokemon.url.split('/')[6]) <= 151)
        for (const i in pokemon) {
          let id = Number(response.data.pokemon[i].pokemon.url.split('/')[6])
          typeData.pokemon[id] = getters.pokemonById(id)
        }
        commit('add_types_data', { typeId: id, data: typeData })
      })
      .catch(error => {
        console.error(error)
      })
  },
  ADD_CARD_DATA ({ commit, getters }, payload) {
    console.log('ADD_CARD_DATA', getters.api.tcg.pokemonById(payload.id))
    axios.get(getters.api.tcg.pokemonById(payload.id))
      .then(response => {
        commit('add_pokemon_card_data', { name: payload.name, data: response.data })
      })
      .catch(error => {
        console.error(error)
      })
  }
}
