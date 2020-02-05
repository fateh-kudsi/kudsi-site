<template>
  <div>
    <PageTitle title="products" animate="slideInDown"></PageTitle>
    <div class="bg-products">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="4" lg="4" class="d-flex">
            <div class="form-group">
              <h1 class="label-type">dispensers type</h1>
              <v-select
                :items="types"
                placeholder="Please Select Type Of Dispensers"
                outlined
                @change="changeType($event)"
              ></v-select>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="8" lg="8">
            <div class="flex-dis">
              <div v-for="(dis,index) in DisF " :key="dis.id" @click="singleDis(dis)">
                <transition-group
                  class="container-dis"
                  tag="div"
                  enter-active-class="animated fadeIn "
                  appear-active-class="animated fadeIn"
                  appear
                >
                  <div :key="index" class="dis-info">
                    <v-btn depressed light>More Info</v-btn>
                  </div>
                  <img :src="`${dis.images}`" alt="kudsi-dis" class="dis-img" :key="dis.images" />
                  <p class="text-center" :key="dis.name">{{dis.name}}</p>
                </transition-group>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import PageTitle from "~/components/PageTitle.vue";

export default {
  data() {
    return {
      loadedPosts: [],
      types: []
    };
  },
  computed: {
    DisF() {
      // create dis Array
      return this.$store.state.finleDis;
    }
  },
  components: {
    PageTitle
  },
  created() {
    this.loadedPosts = this.$store.state.loadedDis;
    // Get unique value for the type
    const getUnique = (items, value) => {
      return [...new Set(items.map(item => item[value]))];
    };
    let types = getUnique(this.loadedPosts, "type");
    types = ["all", ...types];
    this.types = types;
  },
  beforeDestroy() {
    // rest DIS Array
    this.$store.commit("restDis");
  },
  methods: {
    // Sort Dis by TYPE
    changeType(payload) {
      this.$store.dispatch("changeType", payload);
    },
    singleDis(id) {
      console.log(id);
      this.$store.commit("singleDis", id);
      this.$router.push(`/products/${id.name}`);
    }
  }
};
</script>


<style scoped>
.bg-products {
  background-color: rgb(16, 16, 16);
}
.label-type {
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px !important;
}

.container-dis {
  background-color: rgba(255, 255, 255, 0.1);
  height: 100%;
  max-width: 90%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.dis-img {
  max-width: 100%;
}
.container-dis img {
  max-width: 50%;
}
.flex-dis {
  width: 80vw;
  margin: 0 auto !important;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-row-gap: 1.5rem;
  grid-column-gap: 0;
}
.dis-info {
  background-color: rgba(60, 180, 110, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
}

.container-dis:hover .dis-info {
  display: flex;
}

@media screen and (min-width: 992px) {
  .flex-dis {
    width: 95vw;
    max-width: 1170px;
  }
}
</style>
// enter-active-class="animated fadeIn "
//                 appear-active-class="animated fadeIn"
//                 appear