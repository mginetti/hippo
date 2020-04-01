<template>
  <div class="splash">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <splash1 />
      </swiper-slide>
      <swiper-slide>
        <splash2 />
      </swiper-slide>
      <swiper-slide>
        <splash3 />
      </swiper-slide>
      <swiper-slide>
        <login />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Splash",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      }
    };
  },
  components: {
    Splash1: () => import("../components/Splash1"),
    Splash2: () => import("../components/Splash2"),
    Splash3: () => import("../components/Splash3"),
    Login: () => import("../components/Login")
  }
};
</script>

<style lang="scss">
.splash {
  position: relative;
  color: #405b84;
  min-height: calc(100vh - 81.6px);
  .swiper-container {
    height: calc(100vh - 81.6px);
  }
}
</style>