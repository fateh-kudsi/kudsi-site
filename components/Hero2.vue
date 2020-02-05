<template>
  <div class="btn-po">
    <v-container>
      <slot></slot>

      <div class="hero1">
        <transition
          appear
          enter-active-class="animated fadeInUp"
          leave-active-class="animated bounce"
        >
          <div class="flex-container">
            <img src="/images/3.png" alt=" pump" class="hero1-img" />
          </div>
        </transition>
        <transition
          appear
          enter-active-class="animated fadeInDown"
          leave-active-class="animated bounce"
        >
          <div class="text-hero1 text-center">
            <h1 class="title-hero1">50 Years Of</h1>
            <h1 class="title-hero1 p-text font-weight-bold">Experience</h1>
            <h1 class="title-hero1 mt-4">First Gasoline Dispenser</h1>
            <h1 class="title-hero1 p-text font-weight-bold">In Midely East</h1>
            <v-btn class="ma-4" outlined color="#fff" x-large nuxt to="/about">About Us</v-btn>
          </div>
        </transition>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.hero1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-hero1 {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  order: 1;
}
.title-hero1,
.title-hero2 {
  font-size: 65px;
  line-height: 65px;
  font-weight: 100;
}
.title-hero2 {
  font-weight: 400;
  font-size: 60px;
}
.p-text {
  color: #3cb46e;
}
.hero1-img {
  width: 400px;
  margin-top: 25px;
}

.btn-po {
  position: relative;
}
.right-btn,
.left-btn {
  position: absolute;
  top: 50%;
}
.right-btn {
  right: 10px;
}
.left-btn {
  left: 10px;
}
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
}
@media (max-width: 960px) {
  .text-hero1 .title-hero1 {
    font-size: 30px;
    line-height: 30px;
  }
  .text-hero1 .title-hero2 {
    font-size: 30px;
    line-height: 30px;
  }
  .right-btn,
  .left-btn {
    top: 80%;
  }
  .hero1-img {
    max-width: 350px;
  }
}
@media (max-width: 635px) {
  .text-hero1 .title-hero1 {
    font-size: 22px;
  }
  .text-hero1 .title-hero2 {
    font-size: 22px;
  }
  .right-btn,
  .left-btn {
    top: 80%;
  }
  .hero1-img {
    max-width: 250px;
  }
}
@media (max-width: 500px) {
  .hero1-img {
    max-width: 150px;
  }
}
</style>
