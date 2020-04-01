<template>
  <div class="mascottes">
    <router-link :to="{name: 'home'}">
      <img src="img/icons/home.svg" alt class="home" />
    </router-link>
    <carousel
      :data="data"
      :controls="false"
      :autoplay="false"
      :interval="15000"
      indicator-type="disc"
    ></carousel>
  </div>
</template>

<script>
import Penny from "../components/Penny";
import Gracy from "../components/Gracy";
import Bubo from "../components/Bubo";
export default {
  name: "Mascottes",
  data() {
    return {
      data: [Penny, Gracy, Bubo]
    };
  }
};
</script>

<style lang="scss">
.mascottes {
  color: #405b84;
  height: calc(100vh - 81.6px);
  a {
    position: absolute;
    top: 10px;
    left: 10px;
    height: 25px;
    width: 25px;
    z-index: 2;
    img {
      height: 25px;
      width: 25px;
      padding-left: 0;
      padding-right: 0;
    }
  }
  .carousel {
    min-height: 100%;
    ul {
      height: calc(100vh - 81.6px);
      li {
        height: calc(100vh - 81.6px);
      }
    }
    .carousel__indicators {
      bottom: 50px;
      li {
        margin: 0.3rem;
      }
      li::before {
        height: 1rem;
        width: 1rem;
        border: 1px solid #405b84;
      }
    }
  }
}
</style>