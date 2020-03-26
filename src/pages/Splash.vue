<template>
  <div class="splash">
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
import Splash1 from "../components/Splash1";
import Splash2 from "../components/Splash2";
import Splash3 from "../components/Splash3";
import Login from "../components/Login";
export default {
  name: "Splash",
  data() {
    return {
      data: [Splash1, Splash2, Splash3, Login]
    };
  }
};
</script>

<style lang="scss">
.splash {
  color: #405b84;
  height: 100vh;
  .carousel {
    min-height: 100%;
    ul {
      height: 100vh;
      li {
        height: 100vh;
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