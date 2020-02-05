<template>
  <div class="bg-title">
    <transition appear :enter-active-class="`animated ${animate}`">
      <h1 class="display-3 font-weight-bold text-uppercase">{{title}}</h1>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    animate: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.bg-title {
  height: 45vh;
  max-height: 45vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url("/images/bg-title.png") no-repeat center center/cover;
}
</style>