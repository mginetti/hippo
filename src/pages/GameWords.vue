<template>
  <div class="game-words">
    <div class="back-game"></div>
    <navbar @pause="setPause()" v-if="!pause && !finish" game></navbar>
    <span v-if="!finish" class="score">Punteggio: {{points}}</span>
    <generate-phrase class="phrase"></generate-phrase>
    <generate-word class="word" @input="setWord($event)" v-if="!finish" :key="refresh"></generate-word>
    <generate-btn
      class="answer"
      @answer="checkAnswer($event)"
      v-if="currentWord && !finish"
      :word="currentWord"
    ></generate-btn>
    <modal v-if="finish" class="modal-finish">
      <template>
        <div class="back">
          <img src="../assets/back-finish.png" alt />
        </div>
        <span class="score">{{score}}</span>
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
    <modal v-if="pause" class="modal-pause">
      <template>
        <div class="back">
          <img src="../assets/back-pause.png" alt />
        </div>
        <h3>PAUSA</h3>
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
  .back-game {
    border: 9px solid #f39322;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../assets/paper.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  height: calc(100vh - 81.6px);
  padding-left: 10px;
  padding-right: 10px;
  .modal-pause {
    .back {
      position: absolute;
      border-radius: 5px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      img {
        border-radius: 5px;

        height: 100%;
        width: 100%;
      }
    }
    h3 {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      margin-top: 15%;
      font-size: 45px;
    }
  }
  .modal-finish {
    background-repeat: no-repeat;
    .back {
      position: absolute;
      border-radius: 5px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      img {
        border-radius: 5px;
        height: 100%;
        width: 100%;
      }
    }
    .score {
      position: absolute;
      top: 40%;
      left: 44%;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 45px;
    }
    .record {
      position: absolute;
      top: 60%;
      left: 60%;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-size: 45px;
    }
  }
  .score {
    margin-left: 10px;
    font-size: 25px;
    border-bottom: 50px;
  }

  .word {
    font-size: 27px;
  }

  .phrase {
    margin-top: 50px;
  }
  .modal {
    box-shadow: 2px 0px 7px 3px rgb(71, 71, 71);
    .action {
      position: absolute;
      display: flex;
      height: 50px;
      margin-top: 50px;
      bottom: 15px;
      left: 0;
      right: 0;
      justify-content: center;
      .home,
      .refresh {
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
  }
  @media only screen and (min-width: 40em) {
    .score,
    .word {
      font-size: 45px;
    }
  }
}
</style>