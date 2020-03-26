<template>
  <div class="gracy">
    <div class="title">
      <h3>Gracy - Rana</h3>
    </div>
    <div class="logo">
      <img src="img/gracy.svg" alt />
    </div>
    <div
      class="text"
    >Disortografia, disturbo specifico della scrittura che si manifesta con difficoltà nell’apprendere ed automatizzare le regole di conversione fonema-grafema e la corretta forma ortografica delle parole.</div>
  </div>
</template>

<script>
export default {
  name: "Gracy"
};
</script>

<style lang="scss">
.gracy {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    text-align: center;
    margin-bottom: 50px;
    h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
  .logo {
    flex-basis: 40%;
    text-align: center;
    width: 60%;

    img {
      height: 100%;
      width: 100%;
    }
  }
  .text {
    padding: 20px;
    font-size: 20px;
  }
}
</style>