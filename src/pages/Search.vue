<template>
  <search-layout>
    <el-row>
      <el-col type="flex">Search!</el-col>
    </el-row>
  </search-layout>
</template>

<script>
  import searchLayout from '@/layouts/Search.vue'

  export default {
    components: {
      searchLayout
    },
    computed: {
      randomId () {
        return Math.floor(Math.random() * (151) + 1)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
