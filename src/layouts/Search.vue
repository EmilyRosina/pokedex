<template>
  <el-container>
    <el-main>
      <!-- CONTENT -->
      <slot></slot>
    </el-main>
    <el-footer>4uroraSkye &copy; {{ new Date().getFullYear()}}</el-footer>
  </el-container>
</template>

<script>
  export default {

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
