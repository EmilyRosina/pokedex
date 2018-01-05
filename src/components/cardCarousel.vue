<template>
  <el-carousel :interval="4000" type="card" :autoplay="false">
    <el-carousel-item v-for="card in cards" :key="card.id">
      <img :src="card.imageUrlHiRes" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    props: {
      cards: {
        type: Array,
        default: []
      }
    }
  }
</script>


<style lang="scss">
  .el-carousel {
    height: 100%;
    &__container {
      height: 90% !important;
    }
    &__item {
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
      &:nth-child(2n+1),
      &:nth-child(2n) {
        background: none !important;
        background-color: none !important;
      }
      &--card {
        width: auto;
        &.is-in-stage {
          // &:first-of-type { transform: translateX(-50%) scale(0.83) !important; border: 3px solid red; }
          // &:last-of-type  { transform: translateX(75%)  scale(0.83) !important; border: 3px solid blue; }
        }
        &.is-active {
          transform: translateX(1.6em) scale(1) !important;
          width: 82.5%;
          height: auto;
          bottom: 0;
          img {
            height: 100%;
            width: auto;
            opacity: 1;
          }
        }
      }
      img {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }
      &:nth-child(2n) {
        background-color: #99a9bf;
      }
      &:nth-child(2n+1) {
        background-color: #d3dce6;
      }
    }
  }
</style>