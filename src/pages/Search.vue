<template>
  <search-layout>
    <el-row type="flex" class="search-controls" :style="{background: `url(${pokeball})`, backgroundSize: 'cover'}">
      <el-col :span="24" style="padding-bottom: 9em; margin-top: -2em;">
        <el-row>
          <el-button @click="goToRandomPokemon" type="warning" plain round>Random</el-button>
        </el-row>
        <el-row>
          <el-button @click="setMode('name')" type="primary" plain round>By Name</el-button>
          <el-button @click="setMode('type')" type="success" plain round>By Type</el-button>
        </el-row>
      </el-col>
      <el-col>
        <el-row>
          <el-input v-model.trim="searchParams.name" @keyup.native="setPokemonName" v-if="mode === 'name'"></el-input>
          <el-select v-model="searchParams.type" placeholder="Select" @change="setPokemonType" v-if="mode === 'type'">
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" style="flex: 1 1 auto;">
      <el-col>
        <ul v-if="mode === 'name' && searching && nameHasMatches" class="pokemon-links">
          <li
            v-for="(match, key) of matched_onName.matches"
            :key="key"
            class="pokemon-link"
            @click="gotToPokemon(match.id)">
            {{ key }}
          </li>
        </ul>
        <ul v-else-if="mode === 'type' && typeHasMatches" class="pokemon-links">
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
  import pokeball from '@/assets/images/pokeball.png'

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
      pokeball () {
        return pokeball
      },
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
  .search-controls {
    .el-input,
    .el-select {
      width: 60%;
    }
    flex-wrap: wrap;
    min-height: 400px;
    height: 400px;
    width: 400px;
    align-content: center;
    justify-content: center;
    // background: url('~/src/assets/images/pokeball.png');
    background-size: cover;
    .el-button {
      margin: 0.25rem;
    }
  }

  .pokemon-links {
    width: 20em;
    max-height: 20em;
    list-style: none;
    padding-left: 0;
    overflow-y: auto;
    padding: 0 1em;
    .pokemon-link {
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
      margin: 0.75em 0;
      cursor: pointer;
      background-color: indianred;
      padding: 0.5em;
      color: white;
      text-transform: capitalize;
      &:hover, &:active {
        background-color: #FF3838;
      }
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.25);
      border-radius: 10px;
      background-color: rgba(0,0,0,0);
    }
    &::-webkit-scrollbar {
      width: 12px;
      background-color: rgba(0,0,0,0);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: white;
    }
  }

</style>

<style lang="scss">
  *:not(.el-select) {
    >.el-input {
      >.el-input__inner {
        border: none;
        background: #bbb;
        color: #333;
        text-align: center;
      }
    }
  }
  .el-button.is-plain {
    background: none;
    color: white;
    border: 1px solid rgba(0,0,0,0.1);
    background: rgba(0,0,0,0.05);
    box-shadow: inset 0 0 3px rgba(0,0,0,0.075);
  }
</style>
