<template>
  <div class="card">
    <div class="card--title">{{title}}</div>
    <div ref="img" class="card--content"></div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: { type: String, required: true },
    img: { type: String, required: true }
  },
  mounted() {
    if (this.img) {
      this.$refs.img.style.backgroundImage = `url("img/${this.img}.svg")`;
    }
  }
};
</script>

<style lang="scss">
.card {
  min-height: 250px;
  max-height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 3px 5px 2px rgb(111, 111, 111);
  border-radius: 5px;
  &--title {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  &--content {
    height: 200px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>