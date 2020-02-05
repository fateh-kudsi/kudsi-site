<template>
  <div>
    <PageTitle title="Contact us" animate="slideInLeft"></PageTitle>
    <div class="bg-contact">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <h1 class="display-1 text-center form-title font-weight-bold">Send Us a Message</h1>
            <div class="my-4">
              <v-text-field outlined append-icon="mdi-account" placeholder="Name"></v-text-field>
              <v-text-field outlined append-icon="mdi-email" placeholder="Email"></v-text-field>
              <v-textarea outlined name="input-7-4" placeholder="Messege" append-icon="mdi-message"></v-textarea>
              <v-btn color="primary" large>send message</v-btn>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <h1 class="display-1 text-center form-title font-weight-bold">Contact Info</h1>
            <div class="info-info">
              <v-row v-for="(info,i) in contactInfo " :key="i">
                <v-col>
                  <v-icon color="primary" size="30px" left>{{info.icon}}</v-icon>
                  <p class="info-contact">{{info.title}}</p>
                </v-col>
              </v-row>
            </div>
            <div class="info-info">
              <div class="my-4 inf-inf">
                <a :href="item.link" v-for="(item,i) in soItems" :key="i" target="_blank">
                  <v-btn class="mx-4 hover-co" fab light x-small>
                    <v-icon dark>{{item.icon}}</v-icon>
                  </v-btn>
                </a>
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
      contactInfo: [
        {
          icon: "mdi-map-marker",
          title: "ISTANBUL TURKEY"
        },
        {
          icon: "mdi-email",
          title: "kudsi@info.com"
        },
        {
          icon: "mdi-cellphone",
          title: "+90 (539-357-3160)"
        }
      ],
      soItems: [
        {
          icon: "mdi-facebook",
          title: "Facebook",
          link: "https://www.facebook.com/"
        },
        {
          icon: "mdi-twitter",
          title: "Twitter",
          link: "https://www.twitter.com/"
        },
        {
          icon: "mdi-instagram",
          title: "Instagram",
          link: "https://www.instagram.com/"
        },
        {
          icon: "mdi-linkedin",
          title: "Linkedin",
          link: "https://www.linkedin.com/"
        }
      ]
    };
  },
  components: {
    PageTitle
  }
};
</script>

<style scoped>
.bg-contact {
  background-color: rgb(16, 16, 16);
  padding: 20px;
}
.form-title {
  margin-bottom: 35px;
}
.info-contact {
  display: inline-block;
  font-size: 22px;
  margin-left: 25px;
}
.info-info {
  margin-left: 100px;
}
a {
  text-decoration: none;
}
.hover-co:hover {
  background-color: #3cb46e !important;
  color: #fff !important;
}
@media (max-width: 500px) {
  .info-contact {
    font-size: 14px;
  }
  .inf-inf {
    width: 100%;
  }
  .hover-co {
    margin-right: 5px !important;
    margin-left: 5px !important;
  }
}
</style>