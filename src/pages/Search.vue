<template>
  <search-layout>
    <el-row>
      <el-button @click="goToRandomPokemon">Random</el-button>
      <el-button @click="setMode('name')">By Name</el-button>
      <el-button @click="setMode('type')">By Type</el-button>
    </el-row>
    <el-row>
      <el-col v-if="mode === 'name'">
        <el-row type="flex">
          <el-input v-model.trim="searchParams.name" @keyup.native="setPokemonName"></el-input>
        </el-row>
        <ul class="pokemon-links" v-if="searching && nameHasMatches">
          <li
            v-for="(match, key) of matched_onName.matches"
            :key="key"
            class="pokemon-link"
            @click="gotToPokemon(match.id)">
            {{ key }}
          </li>
        </ul>
      </el-col>
      <el-col v-if="mode === 'type'">
        <el-select v-model="searchParams.type" placeholder="Select" @change="setPokemonType">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <ul class="pokemon-links" v-if="searching && typeHasMatches">
          <li
            v-for="(match, key) of matched_onType.matches"
            :key="key"
            class="pokemon-link"
            @click="gotToPokemon(match.id)">
            {{ match.name }}
          </li>
        </ul>
      </el-col>
    </el-row>
  </search-layout>
</template>

<script>
  import searchLayout from '@/layouts/Search.vue'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        mode: 'name', // name, type
        searchParams: {
          name: '',
          type: 1
        }
      }
    },
    components: {
      searchLayout
    },
    computed: {
      ...mapGetters([
        'matched_onName',
        'matched_onType'
      ]),
      randomId () {
        return Math.floor(Math.random() * (151) + 1)
      },
      searching () {
        return this.$store.state.searchParams.name.length >= 3
      },
      nameHasMatches () {
        return this.$store.getters.matched_onName ? this.$store.getters.matched_onName.total > 0 : false
      },
      typeHasMatches () {
        return this.$store.getters.matched_onType ? this.$store.getters.matched_onType.total > 0 : false
      },
      typeOptions () {
        let options = []
        for (const type in this.$store.getters.types) {
          console.log('typeOptions', type)
          options.push({
            label: this.$store.getters.types[type].name,
            value: this.$store.getters.types[type].id
          })
        }
        return options
      },
      searchNameApplied () {
        return this.searchParams.name.length > 0
      }

    },
    methods: {
      setMode (mode) {
        this.mode = mode
      },
      clearSearch () {
        this.commit('clear_search')
      },
      goToRandomPokemon () {
        let randomId = Math.floor(Math.random() * (151) + 1)
        this.$router.push({ name: 'Pokemon', params: { id: randomId } })
      },
      gotToPokemon (id) {
        this.$router.push({ name: 'Pokemon', params: { id } })
      },
      setPokemonName () {
        this.$store.commit('set_search_name', this.searchParams.name)
      },
      setPokemonType () {
        this.$store.commit('set_search_type', this.searchParams.type)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pokemon-links {
    list-style: none;
    padding-left: 0;
    .pokemon-link {
      margin: 0.75em 0;
      cursor: pointer;
      background-color: indianred;
      padding: 0.5em;
      color: white;
      text-transform: capitalize;
    }
  }
</style>
