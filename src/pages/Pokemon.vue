<template>
  <results-layout>
    <el-row v-if="loaded" type="flex" class="pokemon-content-wrapper">
      <el-col :span="9">
        <el-col class="pokemon-cards">
          <img :src="cardShowing" class="pokemon-card" v-if="cardDataloaded"/>
        </el-col>
      </el-col>
      <el-col :span="15" class="flex-col">
        <el-row type="flex">
          <el-col><h1 class="pokemon-name">{{ pokemon.name }}</h1></el-col>
          <el-col><h3 class="pokemon-id"># {{ pokemon.id }}</h3></el-col>
        </el-row>
        <el-row type="flex" style="flex: 1 0 auto;">
          <el-col :span="16" class="flex-col pokemon-type">
            <template v-if="extraDataloaded">
              <span v-for="(battleType, index) in pokemon.data.types" :key="index">{{ battleType.type.name }}</span>
            </template>
            <template v-else>
              <span class="placeholder">[battle type]</span>
            </template>
          </el-col>
          <el-col :span="8" class="flex-col">
            <img :src="pokemon.images.main" class="pokemon-main-image"/>
          </el-col>
        </el-row>
        <el-row type="flex" class="pokemon-sprites" >
          <template v-if="extraDataloaded">
            <el-col class="pokemon-sprite" v-for="(sprite, index, key) in sprites" :key="index">
              <img :src="sprite" />
            </el-col>
          </template>
          <template v-else>
            <el-col class="pokemon-sprite">
              <span class="placeholder">[sprites]</span>
            </el-col>
          </template>
        </el-row>
      </el-col>
    </el-row>
  </results-layout>
</template>

<script>
  import resultsLayout from '@/layouts/Results'

  export default {
    mounted () {
      if (!this.extraDataloaded && this.pokemon) {
        this.$store.dispatch('ADD_POKEMON_DATA', { id: this.pokemonId, name: this.pokemon.name })
      }
      if (!this.cardDataloaded && this.pokemon) {
        this.$store.dispatch('ADD_CARD_DATA', { id: this.pokemonId, name: this.pokemon.name })
      }
    },
    updated () {
      if (!this.extraDataloaded && this.pokemon) {
        this.$store.dispatch('ADD_POKEMON_DATA', { id: this.pokemonId, name: this.pokemon.name })
      }
      if (!this.cardDataloaded && this.pokemon) {
        this.$store.dispatch('ADD_CARD_DATA', { id: this.pokemonId, name: this.pokemon.name })
      }
    },
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
      extraDataloaded () {
        return this.loaded ? this.pokemon.hasOwnProperty('data') : false
      },
      cardDataloaded () {
        return this.loaded ? this.pokemon.hasOwnProperty('cardData') : false
      },
      pokemonId () {
        return Number(this.$route.params.id)
      },
      pokemon () {
        return this.$store.getters.pokemonById(this.pokemonId)
      },
      sprites () {
        if (this.pokemon.data.sprites) {
          let sprites = {}
          for (const i in this.pokemon.data.sprites) {
            if (this.pokemon.data.sprites[i] !== null) {
              sprites[i] = this.pokemon.data.sprites[i]
            }
          }
          return sprites
        } else {
          return null
        }
      },
      cardShowing () {
        return this.cards[0].imageUrlHiRes
      },
      cards () {
        return this.pokemon.cardData ? this.pokemon.cardData.cards : null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .placeholder {
    background: rgba(255,255,255,0.5);
    color: #666;
    padding: 0.25em;
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .pokemon {
    &-content-wrapper {
      height: 100%;
    }
    &-name {
      text-transform: capitalize;
      font-size: 3rem;
      text-align: left;
      margin: 0;
      padding-left: 0.15em;
    }
    &-id {
      font-size: 4rem;
      font-weight: 100;
      text-align: right;
      color: white;
      text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
      margin: 0;
    }
    &-type {
      text-align: left;
      padding: 1em 3em;
    }
    &-main-image {
      width: 300px;
      align-self: flex-end;
    }
    &-cards {
      background: rgba(0,0,0,0.25);
      font-size: 1.5rem;
      font-weight: 100;
      color: rgba(255,255,255,0.75);
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      .pokemon-card {
        height: 100%;
        object-fit: contain;
      }
    }
    &-sprites {
      overflow: hidden;
      padding: 0.25em;
      padding-bottom: 0;
      // background: white;
      .pokemon-sprite {
        margin: 0.5em;
        margin-bottom: 0;
        background: rgba(0,0,0,0.5);
        height: 100px;
        // width: 10%;
        // min-width: 10%;
        align-items: center;
      }
    }
  }
  .el-carousel__item, .el-carousel__mask {
    position: relative;
  }
</style>
