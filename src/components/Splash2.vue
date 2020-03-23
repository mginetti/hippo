<template>
  <div class="splash-2">
    <div class="image">
      <img src="img/splash-2.jpg" alt />
    </div>
    <div class="text">
      <h3>
        Qui tu puoi trovare
        <br />fantastici minigiochi
        <br />per imparare cos'è la
        <br />dislessia
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
.splash-2 {
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
    margin-bottom: 50px;

    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>