<template>
  <div class="navbar">
    <div v-if="standard" class="navbar--standard">
      <div class="title">
        <img src="img/hippo.png" alt />
        Ciao {{$store.state.name}}!
      </div>
      <div class="action">
        <router-link :to="{name: 'info'}" class="info">
          <img src="img/icons/info.svg" alt />
        </router-link>
        <router-link :to="{name: 'mascottes'}" class="mascotte">
          <img src="img/icons/paw.svg" alt />
        </router-link>
      </div>
    </div>
    <div v-if="game" class="navbar--game">
      <div class="pause">
        <img @click="$emit('pause')" src="img/pause.svg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    standard: { type: Boolean, default: false },
    game: { type: Boolean, default: false }
  }
};
</script>

<style lang="scss">
.navbar {
  height: 6vh;
  width: 100%;
  margin-bottom: 10px;
  &--standard {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    .title {
      height: 100%;
      width: 60%;
      display: flex;
      align-items: center;
      img {
        height: 100%;
        margin-right: 10px;
      }
    }
    .action {
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;
      .info {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        img {
          max-height: 50%;
          max-width: 50%;
        }
      }
      .mascotte {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        img {
          max-height: 50%;
          max-width: 50%;
        }
      }
    }
  }
  &--game {
    display: flex;
    height: 100%;

    .pause {
      height: 100%;
      display: flex;
      align-items: center;
      img {
        height: 50%;
      }
    }
  }
}
</style>