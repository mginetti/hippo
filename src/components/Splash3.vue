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
  .image {
    flex-basis: 40%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
    }
  }
  .text {
    text-align: center;
    margin-top: 25px;
    h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
}
</style>