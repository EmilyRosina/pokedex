<template>
  <results-layout>
    <el-row>
      <el-col v-if="loaded">
        Pokemon! #{{ pokemonId }}
        <img :src="pokemon.images.main" />
      </el-col>

    </el-row>
  </results-layout>
</template>

<script>
  import resultsLayout from '@/layouts/Results'

  export default {
    components: {
      resultsLayout
    },
    computed: {
      loaded () {
        if (this.pokemon) {
          return true
        } else {
          return false
        }
      },
      pokemonId () {
        return Number(this.$route.params.id)
      },
      pokemon () {
        return this.$store.getters.pokemonById(this.pokemonId)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
