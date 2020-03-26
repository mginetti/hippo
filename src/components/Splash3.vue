<template>
  <div class="splash-3">
    <div class="image">
      <img src="img/cards.svg" alt />
    </div>
    <div class="text">
      <h3>
        La nostra app
        contiene
        <br />tre
        categorie:
        <br />forme
        <br />lettere
        <br />numeri
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Splash2"
};
</script>

<style lang="scss">
.splash-3 {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .text {
    text-align: center;
    h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
  .image {
    width: 100%;
    max-height: 40vh;
    text-align: center;
    margin-bottom: 25px;
    img {
      height: 100%;
      width: 80%;
    }
  }
}
</style>