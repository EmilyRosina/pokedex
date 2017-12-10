<template>
  <el-container>
    <el-main>
      <el-button @click="goToRandomPokemon">Random</el-button>
      <!-- CONTENT -->
      <slot></slot>
    </el-main>
    <el-footer>4uroraSkye &copy; {{ new Date().getFullYear()}}</el-footer>
  </el-container>
</template>

<script>
  export default {
    methods: {
      clearSearch () {
        this.commit('CLEAR_SEARCH')
      },
      goToRandomPokemon () {
        let randomId = Math.floor(Math.random() * (151) + 1)
        this.$router.push({ name: 'Pokemon', params: { id: randomId } })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
