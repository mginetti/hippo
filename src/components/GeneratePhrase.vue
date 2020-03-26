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
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
    }
  }
};
</script>

<style lang="scss">
.generate-phrase {
  display: flex;
  max-height: 100px;
  margin-bottom: 50px;
  &--panda {
    flex-basis: 30%;
    display: flex;
    align-items: center;
    img {
      height: 250%;
      width: 250%;
    }
  }
  &--fumetto {
    flex-basis: 70%;
    p {
      position: relative;
      padding-right: 16%;
      padding-left: 14%;
      font-size: 18px;
    }
    p::before {
      content: url("../assets/fumetto.svg");
      position: absolute;
      top: -28px;
      left: 0;
      width: 100%;
      z-index: -1;
    }
  }
}
</style>