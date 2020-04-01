<template>
  <div class="modal">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    score: { type: Number }
  }
};
</script>

<style lang="scss" >
.modal {
  position: absolute;
  z-index: 5;
  width: 95%;
  height: 95%;
  background-color: white;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 5px;
  text-align: center;
  .content {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    height: 100%;
    transform: translate(-50%, -50%);
  }
}
</style>