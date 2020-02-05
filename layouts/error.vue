<template>
  <v-app dark>
    <div class="error-page">
      <h1 v-if="error.statusCode === 404" class="display-2">{{ pageNotFound }}</h1>
      <h1 v-else>{{ otherError }}</h1>
      <NuxtLink to="/" class="my-4">Back to Home page</NuxtLink>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  data() {
    return {
      pageNotFound: "sorry this page isn't available yet",
      otherError: "An error occurred"
    };
  }
};
</script>

<style scoped>
.error-page {
  background-color: rgb(16, 16, 16);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
