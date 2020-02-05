<template>
  <div class="p1-background">
    <v-container>
      <div class="p1-margin">
        <v-row>
          <v-col>
            <img src="/images/5.jpg" alt="p1-img" class="p1-img" />
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <div class="p1-border">
              <h1 class="p1-title">Promising Future</h1>
              <p class="p1">
                In syria, our business involves also planning
                and construction for service stations and
                related facilities, after-service of our
                products such as inspections and repair,
                and last, but not least, we are also engaged
                in environment-related activities such as
                soil analyses and remediation.
                Kudsi-Group Corporation’s activities are
                not only limited to Syria but you can find
                our group companies
              </p>
            </div>
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
  background: #010101;
}
.p1-margin {
  margin-top: 100px;
}
.p1-img {
  width: 65%;
  max-width: 65%;
}
.p1-title {
  font-size: 26px;
  margin-bottom: 10px;
}
.p1 {
  color: rgba(255, 255, 255, 0.8);
  padding-left: 20px;
  margin-bottom: 0 !important;
  line-height: 40px;
}
.p1-border {
  border-left-width: 1px !important;
  border-left-color: rgba(129, 129, 129, 0.2) !important;
  border-left-style: solid !important;
}
@media (max-width: 1000px) {
  .p1-background {
    max-height: 800px;
    height: 800px;
  }
  .p1-title {
    padding-top: 25px;
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
    border-top-width: 2px !important;
    border-top-color: rgba(129, 129, 129, 0.2) !important;
    border-top-style: solid !important;
    border-left-width: 0 !important;
  }
}
</style>