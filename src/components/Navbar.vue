<template>
  <div class="navbar">
    <div v-if="standard" class="navbar--standard">
      <div class="title">Ciao {{this.$store.state.name}}!</div>
      <div class="action">
        <div class="info">
          <img @click="$emit('info')" src="img/icons/info.svg" alt />
        </div>
        <div class="mascotte">
          <img @click="emit('mascotte')" src="img/icons/paw.svg" alt />
        </div>
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
  height: 5vh;
  width: 100%;
  margin-bottom: 10px;
  &--standard {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    .title {
      width: 60%;
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