<template>
  <div class="splash">
    <carousel :data="data" :controls="false" indicator-type="disc"></carousel>
  </div>
</template>

<script>
import Splash1 from "../components/Splash1";
import Splash2 from "../components/Splash2";
export default {
  name: "Splash",
  data() {
    return {
      data: [Splash1, Splash2]
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