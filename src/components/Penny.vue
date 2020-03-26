<template>
  <div class="penny">
    <div class="title">
      <h3>Penny - Panda</h3>
    </div>
    <div class="logo">
      <img src="img/penny.svg" alt />
    </div>
    <div
      class="text"
    >Dislessia, disturbo specifico della lettura che si caratterizza per la difficoltà nell’effettuare una lettura accurata e fluente in termini di velocità e correttezza. Tale difficoltà può avere ripercussioni sulla comprensione del testo scritto.</div>
  </div>
</template>

<script>
export default {
  name: "Penny"
};
</script>

<style lang="scss">
.penny {
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
    width: 60%;
    text-align: center;
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