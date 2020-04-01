<template>
  <div class="mascottes">
    <router-link :to="{name: 'home'}">
      <img src="img/icons/home.svg" alt class="home" />
    </router-link>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <penny />
      </swiper-slide>
      <swiper-slide>
        <gracy />
      </swiper-slide>
      <swiper-slide>
        <bubo />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Mascottes",
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
    Gracy: () => import("../components/Gracy"),
    Penny: () => import("../components/Penny"),
    Bubo: () => import("../components/Bubo")
  }
};
</script>

<style lang="scss">
.mascottes {
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
  position: relative;
  color: #405b84;
  min-height: calc(100vh - 81.6px);
  .swiper-container {
    height: calc(100vh - 81.6px);
  }
}
</style>