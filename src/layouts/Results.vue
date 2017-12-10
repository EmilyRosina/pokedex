<template>
  <el-container>
    <el-header>
      <el-button @click="newSearch">New Search</el-button>
      <el-button @click="goToRandomPokemon">Random</el-button>
    </el-header>
    <el-main>
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
        // this.$destroy()
        console.log(this)
        let randomId = Math.floor(Math.random() * (151) + 1)
        this.$router.push({ params: { id: randomId } })
      },
      newSearch () {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .el-button {
      width: 10em;
    }
  }
</style>
