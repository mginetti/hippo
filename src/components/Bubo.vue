<template>
  <div class="bubo">
    <div class="title">
      <h3>Bubo - Gufo</h3>
    </div>
    <div class="logo">
      <img src="img/bubo.svg" alt />
    </div>
    <div
      class="text"
    >Discalculia, disturbo specifico delle abilità di calcolo, con difficoltà importanti nell’automatizzazione dei processi di calcolo sia mentale che scritto, nell’acquisizione e recupero dei fatti numerici in generale, nel comprendere e operare con i numeri.</div>
  </div>
</template>

<script>
export default {
  name: "Bubo"
};
</script>

<style lang="scss">
.bubo {
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
    width: 50%;

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