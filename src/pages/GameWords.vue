<template>
  <div class="game-words">
    <navbar @pause="setPause()" game></navbar>
    <span v-if="!finish" class="score">Punteggio: {{points}}</span>
    <generate-phrase></generate-phrase>
    <generate-word @input="setWord($event)" v-if="!finish" :key="refresh"></generate-word>
    <generate-btn @answer="checkAnswer($event)" v-if="currentWord && !finish" :word="currentWord"></generate-btn>
    <modal v-if="finish">
      <template>
        <h2>Punteggio</h2>
        <span class="score">{{score}}</span>
        <h4>Record</h4>
        <span class="record">{{record}}</span>
        <div class="action">
          <div class="home">
            <router-link :to="{name: 'home'}">
              <img src="img/icons/home.svg" alt />
            </router-link>
          </div>
          <div class="refresh">
            <img @click="again()" src="img/icons/refresh.svg" alt />
          </div>
        </div>
      </template>
    </modal>
    <modal v-if="pause">
      <template>
        <h2>Punteggio</h2>
        <span class="score">{{score}}</span>
        <h4>Record</h4>
        <span class="record">{{record}}</span>
        <div class="action">
          <div class="home">
            <router-link :to="{name: 'home'}">
              <img src="img/icons/home.svg" alt />
            </router-link>
          </div>
          <div class="refresh">
            <img @click="start()" src="img/icons/play.svg" alt />
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
export default {
  name: "GameWords",
  data() {
    return {
      increment: 5,
      currentWord: "",
      finish: false,
      refresh: 0,
      score: 0,
      pause: false
    };
  },
  computed: {
    points() {
      return this.$store.state.points;
    },
    username() {
      return this.$store.state.name;
    },
    record() {
      return this.$store.state.record;
    }
  },
  methods: {
    addPoints() {
      this.$store.commit("addPoints", this.increment);
    },
    newRecord() {
      this.$store.commit("setRecord", this.points);
    },
    setWord(e) {
      this.currentWord = e;
    },
    checkAnswer(answer) {
      if (answer == this.currentWord) {
        this.addPoints();
        this.refresh++;
      } else {
        if (this.points > this.record) {
          this.newRecord();
        }
        this.score = this.points;
        this.finish = true;
      }
    },
    again() {
      this.refresh++;
      this.finish = false;
      this.$store.commit("resetPoints");
    },
    setPause() {
      this.pause = true;
    },
    start() {
      this.pause = false;
    }
  },
  components: {
    GenerateWord: () => import("../components/GenerateWord"),
    GenerateBtn: () => import("../components/GenerateBtn"),
    GeneratePhrase: () => import("../components/GeneratePhrase"),
    Navbar: () => import("../components/Navbar"),
    Modal: () => import("../components/Modal")
  }
};
</script>

<style lang="scss">
.game-words {
  .score {
    margin-left: 10px;
    font-size: 25px;
  }
  .modal {
    .score {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 45px;
    }
    .record {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 25px;
    }
    .action {
      position: relative;
      display: flex;
      height: 50px;
      margin-top: 50px;
      .home,
      .refresh {
        flex-basis: 50%;
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
  }
}
</style>