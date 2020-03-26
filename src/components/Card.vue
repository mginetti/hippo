<template>
  <div :class="[{'locked': locked}]" class="card">
    <div v-if="locked" class="card--overflow"></div>
    <div v-if="locked" class="card--lock">
      <img src="img/lock.svg" alt />
    </div>
    <div class="card--title">{{title}}</div>
    <div ref="img" class="card--content"></div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: { type: String, required: true },
    img: { type: String, required: true },
    locked: { type: Boolean, default: false }
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
  position: relative;
  min-height: 25vh;
  max-height: 27vh;
  margin-bottom: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 3px 5px 2px rgb(111, 111, 111);
  border-radius: 5px;
  &--overflow {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: #3d5984;
    opacity: 0.5;
  }
  &--lock {
    position: absolute;
    right: 10px;
    top: 5%;
    height: 25px;
    width: 25px;
  }
  &--title {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    color: #f29100;
    font-weight: normal;
  }
  &--content {
    height: 200px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>