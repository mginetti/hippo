<template>
  <div v-if="word" class="generate-btn">
    <button @click="answer(btn)" v-for="btn in getWords()" :key="btn">{{btn.toUpperCase()}}</button>
  </div>
</template>

<script>
export default {
  name: "GenerateBtn",
  props: {
    word: { type: String, required: true }
  },
  methods: {
    getWords() {
      let toReturn = [];
      toReturn.push(this.word);
      for (let i = 0; i < 3; i++) {
        toReturn.push(this.getRandomWord());
      }
      return this.shuffle(toReturn);
    },
    getRandomWord() {
      let arrayWords = [],
        toReturn = "";
      for (let i = 0; i < this.word.length; i++) {
        arrayWords.push(this.word[i]);
      }
      toReturn = this.shuffle(arrayWords).join("");
      return toReturn;
    },
    shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    answer(text) {
      this.$emit("answer", text);
    }
  }
};
</script>

<style lang="scss">
.generate-btn {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  button {
    flex-basis: 50%;
    padding: 10px;
    background-color: unset;
    border: unset;
    position: relative;
    margin-bottom: 50px;
    font-size: 22px;
  }
  button::before {
    content: url("../assets/bordo.svg");
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
  }
}
</style>