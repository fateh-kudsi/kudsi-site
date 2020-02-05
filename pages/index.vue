<template>
  <div>
    <div class="h-background">
      <component :is="selectedHero">
        <v-btn @click="changeHero" class="right-btn">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn @click="changeHero" class="left-btn">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </component>
    </div>
    <Slider />
  </div>
</template>

<script>
import Hero1 from "~/components/Hero1.vue";
import Hero2 from "~/components/Hero2.vue";
import Slider from "~/components/Slider.vue";
export default {
  data() {
    return {
      selectedHero: Hero1
    };
  },
  components: {
    Hero1,
    Hero2,
    Slider
  },
  methods: {
    changeHero() {
      if (this.selectedHero === Hero2) {
        return (this.selectedHero = Hero1);
      }
      if (this.selectedHero === Hero1) {
        return (this.selectedHero = Hero2);
      }
    }
  }
};
</script>


<style  scoped>
.h-background {
  min-height: calc(100vh - 60px);

  background-color: rgba(15, 15, 15);
  margin-top: 50px;
}
@media (max-width: 635px) {
  .h-background {
    min-height: 75vh;
  }
}
@media (max-width: 500px) {
  .h-background {
    min-height: 50vh;
  }
}
</style>