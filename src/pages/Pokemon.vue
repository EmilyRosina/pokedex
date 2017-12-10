<template>
  <results-layout>
    <el-row>
      <el-col>
        Pokemon! #{{ pokemonId }}
        <img :src="pokemonImage" />
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
      pokemonId () {
        return this.$route.params.id
      },
      pokemonImage () {
        return this.$store.getters.pokemonImageById(this.pokemonId)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
