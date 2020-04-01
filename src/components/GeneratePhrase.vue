<template>
  <div class="generate-phrase">
    <div class="generate-phrase--panda">
      <img src="img/panda.svg" alt />
    </div>
    <div v-if="phrase" class="generate-phrase--fumetto">
      <p>{{phrase}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GeneratePhrase",
  computed: {
    phrase() {
      return this.generatePhrase();
    }
  },
  methods: {
    generatePhrase() {
      return "Scegli la parola giusta qua sotto...";
    }
  }
};
</script>

<style lang="scss">
.generate-phrase {
  display: flex;
  min-height: 25%;
  margin-bottom: 50px;
  &--panda {
    flex-basis: 30%;
    display: flex;
    align-items: center;
    margin-top: 9%;
    img {
      height: 250%;
      width: 250%;
    }
  }
  &--fumetto {
    flex-basis: 70%;
    display: flex;
    align-items: center;
    p {
      position: relative;
      padding-right: 16%;
      padding-left: 14%;
      top: -8%;
      font-size: 18px;
    }
    @media only screen and (min-width: 40em) {
      p {
        top: -12%;
        font-size: 25px;
      }
    }
    @media only screen and (min-width: 49em) {
      p {
        top: -12%;
        font-size: 35px;
      }
    }
  }
  &--fumetto::before {
    content: url("../assets/fumetto.svg");
    position: absolute;
    width: 70%;
    z-index: -1;
  }
}
</style>