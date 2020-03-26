<template>
  <div class="info-page">
    <router-link :to="{name: 'home'}" class="link-home">
      <img src="img/icons/home.svg" alt class="home" />
    </router-link>
    <div class="website">
      <h3>Visita il nostro sito</h3>
      <a href target="_blank">
        <img src="img/icons/site.svg" alt />
      </a>
    </div>
    <div class="instagram">
      <h3>Seguici su Instagram</h3>
      <a href="https://www.instagram.com/happyhippo_babysix/" target="_blank">
        <img src="img/icons/instagram.svg" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info"
};
</script>

<style lang="scss">
.info-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  .link-home {
    position: absolute;
    top: 10px;
    left: 10px;
    height: 25px;
    width: 25px;
    z-index: 2;
    img {
      height: 25px;
      width: 25px;
      padding-left: 0;
      padding-right: 0;
    }
  }
  .website {
    margin-bottom: 25px;
  }
  .website,
  .instagram {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin-bottom: 50px;
    }
    a {
      height: 100%;
      width: 100%;
      img {
        height: 45px;
        width: 45px;
      }
    }
  }
}
</style>