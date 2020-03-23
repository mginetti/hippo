<template>
  <div v-if="word" class="generate-word">
    <h2 class="generate-word--word">{{getRandomWord(word).toUpperCase()}}</h2>
  </div>
</template>

<script>
import dictionarySchema from "../assets/dictionary";
export default {
  name: "GenerateWord",
  data() {
    return {
      dictionary: dictionarySchema
    };
  },
  computed: {
    word() {
      const toReturn = this.getWord();
      if (toReturn) {
        this.$emit("input", toReturn);
        return toReturn;
      }
      return "";
    }
  },
  methods: {
    getRandom() {
      return Math.random() * 0.116;
    },
    getWord() {
      let index = Math.floor(this.getRandom() * 10000);
      return this.dictionary[index];
    },
    getRandomWord(word) {
      let arrayWords = [],
        toReturn = "";
      for (let i = 0; i < word.length; i++) {
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
    }
  }
};
</script>

<style lang="scss">
.generate-word {
  margin-bottom: 50px;
  text-align: center;
}
</style>