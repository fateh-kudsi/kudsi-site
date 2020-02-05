<template>
  <div class="p1-background">
    <v-container>
      <div class="p1-margin">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <div class="p1-border">
              <h1 class="p1-title">50 Years Of Experience</h1>
              <p class="p1">
                kudsi group was founded in 1957 and in 1969
                produced the first gasoline dispenser in Syria.
                Since then, the company has grown along
                with the spread of cars and the motorization
                of society offering safe and
                environmental-friendly fueling solutions.
                We do not only concentrate on
                gasoline dispensers but also
                on dispensers for clean fuels such
                as LPG, CNG, LNG and hydrogen.
              </p>
            </div>
          </v-col>
          <v-col>
            <img src="/images/4.svg" alt="p1-img" class="p1-img" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>



<style scoped>
.p1-background {
  height: 500px;
  max-height: 500px;
  width: 100%;
  text-align: center;
  background: rgb(16, 16, 16);
}
.p1-margin {
  margin-top: 100px;
}
.p1-img {
  width: 65%;
  max-width: 65%;
  padding-bottom: 20px;
}
.p1-title {
  font-size: 26px;
  margin-bottom: 10px;
}
.p1 {
  color: rgba(255, 255, 255, 0.8);
  padding-right: 20px;
  margin-bottom: 0 !important;
  line-height: 40px;
}
.p1-border {
  border-right-width: 1px !important;
  border-right-color: rgba(129, 129, 129, 0.2) !important;
  border-right-style: solid !important;
}
@media (max-width: 1000px) {
  .p1-background {
    max-height: 800px;
    height: 800px;
  }
  .p1-img {
    margin-top: 40px;
    width: 75%;
    max-width: 75%;
  }
  .p1 {
    line-height: 35px;
    padding-bottom: 50px;
  }
  .p1-border {
    border-bottom-width: 2px !important;
    border-bottom-color: rgba(129, 129, 129, 0.2) !important;
    border-bottom-style: solid !important;
    border-right-width: 0 !important;
  }
}
</style>