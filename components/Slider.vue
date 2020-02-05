<template>
  <div class="slider-align">
    <v-sheet class="mx-auto bg-p" max-width="100%" height="100%">
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="(img,index) in clieImg" :key="index" class="bg-p">
          <img class="clie-img" rounded :src="`${img.img}`" />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>


<script>
export default {
  data() {
    return {
      clieImg: [
        { img: "/images/clie/1.png" },
        { img: "/images/clie/2.png" },
        { img: "/images/clie/3.png" },
        { img: "/images/clie/4.png" },
        { img: "/images/clie/1.png" },
        { img: "/images/clie/2.png" },
        { img: "/images/clie/3.png" },
        { img: "/images/clie/4.png" },
        { img: "/images/clie/1.png" },
        { img: "/images/clie/2.png" },
        { img: "/images/clie/3.png" },
        { img: "/images/clie/4.png" }
      ]
    };
  }
};
</script>

<style scoped>
.slider-align {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 30px 0;
}
.clie-img {
  width: 200px;
  max-height: 60px;
  max-width: 100%;
  margin-right: 50px;
}
.bg-p {
  background-color: transparent !important;
}
</style>