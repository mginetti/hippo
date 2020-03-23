<template>
  <div>
    <navbar standard></navbar>
    <router-link :to="{name: 'game-words'}">
      <card title="Lettere" img="lettere"></card>
    </router-link>
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
      console.log("ciaoo");
      this.$route.push({ name: "game-words" });
    }
  },
  components: {
    Navbar: () => import("../components/Navbar"),
    Card: () => import("../components/Card")
  }
};
</script>

<style lang="scss" scoped>
</style>