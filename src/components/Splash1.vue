<template>
  <div class="splash-1">
    <div class="title">
      <h3>Benvenuto nell'app</h3>
      <h3>Happy Hippo, questo è Hippo</h3>
    </div>
    <div class="logo">
      <img src="img/splash1.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Splash1"
};
</script>

<style lang="scss">
.splash-1 {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    text-align: center;
    h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
  .logo {
    flex-basis: 40%;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }
}
</style>