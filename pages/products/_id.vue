<template>
  <div class="bg-singleDis">
    <v-container class="mt-5">
      <div class="flex-dis">
        <div class="img-dis hidden-md-and-down">
          <img :src="`${singleDis.images}`" alt />
        </div>
        <div class="text-dis">
          <h1 class="dis-name">{{singleDis.name}}</h1>
          <p class="dis-slug">{{singleDis.slug}}</p>
          <p class="dis-description">{{singleDis.description}}</p>
          <p class="dis-description">{{singleDis.extras}}</p>
          <div class="mb-4">
            <v-btn
              :nuxt="true"
              to="/products"
              max-width="50%"
              style="paddingLeft:10px;paddingRight:10px;"
              class="btn-mobile"
            >Products</v-btn>
            <v-btn
              :nuxt="true"
              to="/"
              style="paddingLeft:10px;paddingRight:10px;"
              max-width="50%"
              class="btn-mobile"
            >Home</v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      singleDis: []
    };
  },
  created() {
    this.singleDis = this.$store.state.singleDis;
  }
};
</script>


<style scoped>
.bg-singleDis {
  background: rgba(16, 16, 16);
}
.flex-dis {
  display: flex;
  justify-content: center;
  align-content: center;
}
.img-dis,
.text-dis {
  flex: 1;

  margin: 100px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text-dis {
  flex: 2;
  background-color: #1a1a1a;
}
.img-dis img {
  max-width: 120%;
}
.dis-name {
  font-size: 34px;
  font-weight: 600;
  line-height: 1.2;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.dis-slug {
  font-weight: 600;

  color: rgba(255, 255, 255, 0.8);
  text-rendering: optimizeLegibility;
}
.dis-description {
  line-height: 1.8;
  margin-bottom: 20px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 200;
  width: 100%;
  padding-left: 20px !important;
  padding-right: 20px !important;
}
@media (max-width: 500px) {
  .text-dis {
    padding-left: 20px;
    padding-right: 20px;
  }
  .btn-mobile {
    max-width: 100%;
    margin-bottom: 10px;
  }
  .dis-slug {
    font-size: 14px;
    text-align: center;
  }
}
</style>