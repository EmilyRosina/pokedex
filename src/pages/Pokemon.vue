<template>
  <results-layout>
    <el-row>
      <el-col>
        Pokemon! #{{ pokemonId }}
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
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
