<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app color="#131313" class="hidden-md-and-up">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          active-class="link-active"
          :nuxt="true"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="line grey lighten-1"></div>
      <p class="text-uppercase d-block text-center my-4">Follow Us</p>

      <a v-for="(item, i) in soItems" :href="item.link" target="_blank" :key="i">
        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </a>
    </v-navigation-drawer>

    <v-app-bar
      max-height="60"
      color="#131313"
      :class="{ 'navbar--hidden': !showNavbar }"
      class="t-navbar"
      fixed
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up" />
      <v-spacer class="hidden-md-and-up" />
      <v-toolbar-title class="ml-5">
        <nuxt-link to="/">
          <v-img src="/images/logo.png" alt="kudsi group logo" width="100" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer class="hidden-sm-and-down" />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="(link,index) in routerLinks"
          :key="index"
          :to="link.to"
          active-class="link-active"
          :nuxt="true"
        >{{link.title}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <nuxt />

    <footer class="app-footer">
      <v-container>
        <v-row color="#131313">
          <v-col cols="12" sm="4" md="2" lg="2">
            <h1 class="text-uppercase title text-center">industries</h1>
            <div class="line-footer"></div>
            <a href class="footer-link subtitle-1">Dental</a>
            <a href class="footer-link subtitle-1">Healthcare</a>
            <a href class="footer-link subtitle-1">Construction</a>
            <a href class="footer-link subtitle-1">Manufacturing</a>
            <a href class="footer-link subtitle-1">Oil & gas services</a>
            <a href class="footer-link subtitle-1">Trucking</a>
          </v-col>
          <v-col cols="2" class="hidden-sm-and-down">
            <h1 class="text-uppercase title text-center">company</h1>
            <div class="line-footer"></div>
            <a href class="footer-link subtitle-1">About</a>
            <a href class="footer-link subtitle-1">Our LMS</a>
            <div style="marginTop:45px">
              <h1 class="text-uppercase title text-center">support</h1>
              <div class="line-footer"></div>
              <a href class="footer-link subtitle-1">Contact</a>
              <a href class="footer-link subtitle-1">Terms of Use</a>
            </div>
          </v-col>
          <v-col cols="4" class="hidden-sm-and-down">
            <h1 class="text-uppercase title">newsletter</h1>
            <div class="line-footer2"></div>
            <h1
              class="subtitle-1 p-footer"
            >Sing up for out monthly newsletter to stay current on all your compliance concerns.</h1>
            <!-- sle -->
            <div class="my-3">
              <h1 class="text-uppercase title">industry news</h1>
              <v-select
                class="pt-4"
                v-model="select"
                :items="test"
                outlined
                background-color="#060606"
                height="10px"
                placeholder="DENTAL"
              ></v-select>
            </div>
            <!-- end -->
            <!-- input filed -->
            <div>
              <h1 class="text-uppercase title news">EMAIL ADDRESS</h1>

              <v-text-field
                placeholder="JohnDoe@mail.com"
                outlined
                background-color="#060606"
                class="pt-4"
              ></v-text-field>
            </div>
            <!-- end -->
            <!-- submit button -->
            <v-btn color="primary">Submit</v-btn>
          </v-col>
          <v-col cols="12" sm="8" md="4" lg="4" class="about-smart">
            <h1 class="text-uppercase title">About smart training</h1>
            <div class="line-footer2" style="maxWidth:60%"></div>
            <h1
              class="subtitle-1 p-footer"
            >Smart Training's Learning Mangement System was developed through years of experience - and the client exprience keeps getting better and better.</h1>
            <h1 class="subtitle-1 p-footer">
              We began offering computer-based OSHA compliance tarining more than 15 years ago now Smart Training offers dozens of different OSHA. HIPAA and DOT training certifications to an ever-widening
              group of clients nationwide.
            </h1>
            <div class="my-4">
              <a :href="item.link" v-for="(item,i) in soItems" :key="i" target="_blank">
                <v-btn class="mx-2" fab small dark>
                  <v-icon dark>{{item.icon}}</v-icon>
                </v-btn>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </footer>
    <div class="sub-footer">
      <p class="mt-4">
        &copy; Kudsi-Group 1969 -
        <span>{{new Date().getFullYear()}}</span>
      </p>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-buffer",
          title: "Products",
          to: "/products"
        },
        {
          icon: "mdi-information",
          title: "About",
          to: "/about"
        },

        {
          icon: "mdi-contact-mail",
          title: "Contact",
          to: "/contact"
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
      ],
      routerLinks: [
        { title: "Home", to: "/", active: "link-active" },
        { title: "Products", to: "/products" },
        { title: "About", to: "/about" },
        { title: "Contact", to: "/contact" }
      ],

      test: ["test1", "test2"],
      showNavbar: true,
      lastScrollPosition: 0,
      select: "hi"
    };
  },

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>
<style  scoped>
.link-active {
  background: #3cb46e;
}
.line {
  height: 1px;
  width: 100%;
}
a {
  text-decoration: none;
}
.line-footer,
.line-footer2 {
  height: 3px;
  width: 60%;
  background-color: #3cb46e;
  margin: 0 auto;
  margin-top: 10px;
}
.line-footer2 {
  max-width: 30%;
  margin: 10px 0 0 0;
}
.footer-link {
  display: block;
  text-align: center;
  margin: 15px 0;
  color: #999999;
}
.footer-link:hover {
  color: #3cb46e;
  text-decoration: underline;
}
.app-footer {
  background-color: #131313;
}
.p-footer {
  color: #999999;
  font-size: 10px;
  margin-top: 20px;
}
.news {
  margin-top: -30px;
}
.sub-footer {
  background-color: #060606;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.col-footer {
  display: block !important;
}
.t-navbar.navbar--hidden {
  transform: translate3d(0, -110%, 0) !important;
}
.t-navbar {
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out !important;
}
::selection {
  background: #3cb46e;
  color: #fff;
}
@media (max-width: 400px) {
  .about-smart {
    display: none;
  }
}
</style>