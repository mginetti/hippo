<template>
  <div class="home">
    <navbar standard></navbar>
    <router-link :to="{name: 'game-words'}">
      <card title="Lettere" img="lettere"></card>
    </router-link>
    <card title="Numeri" img="numeri" locked></card>
    <card title="Forme" img="forme" locked></card>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {},
  methods: {
    addPoint() {
      this.$store.commit("addPoints", 10);
    },
    gameWords() {
      this.$route.push({ name: "game-words" });
    }
  },
  components: {
    Navbar: () => import("../components/Navbar"),
    Card: () => import("../components/Card")
  }
};
</script>

<style lang="scss">
.home {
  padding-left: 25px;
  padding-right: 25px;
  a {
    text-decoration: unset;
    color: #405b84;
    font-weight: 600;
  }
}
</style>