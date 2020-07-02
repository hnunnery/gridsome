<template>
  <v-app style="overflow: hidden;">
    <v-app-bar app absolute elevation="0" class="app transparent">
      <v-btn icon @click="drawer = !drawer" class="hidden-md-and-up mr-0">
        <v-icon large>menu</v-icon>
      </v-btn>

      <v-navigation-drawer
        app
        absolute
        temporary
        disable-resize-watcher
        v-model="drawer"
        class="title nav-drawer"
        width="180px"
      >
        <v-list>
          <v-list-item
            to="/"
            active-class="primary--text"
            style="padding-left: 35px !important;"
          >
            Home
          </v-list-item>

          <v-list-item
            to="/store"
            active-class="primary--text"
            style="padding-left: 35px !important;"
          >
            Store
          </v-list-item>

          <v-list-item
            to="/about"
            active-class="primary--text"
            style="padding-left: 35px !important;"
          >
            About
          </v-list-item>

          <v-list-item
            to="/blog"
            active-class="primary--text"
            style="padding-left: 35px !important;"
          >
            Blog
          </v-list-item>

          <v-list-item
            to="/contact"
            active-class="primary--text"
            style="padding-left: 35px !important;"
          >
            Contact
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-container class="py-0">
        <v-row class="align-center">
          <v-col class="text-center text-md-left">
            <g-link to="/">
              <v-toolbar-title
                class="secondary--text mont"
                style="font-size: 1.8em;"
                >{{ $static.metadata.siteName }}</v-toolbar-title
              >
            </g-link>
          </v-col>
          <!-- NAVBAR FOR bold AND UP SCREEN SIZES -->
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text to="/" class="no-active">
              <span class="nav-text secondary--text py-2">Home</span>
            </v-btn>
            <v-btn text to="/store" class="no-active">
              <span class="nav-text secondary--text py-2">Store</span>
            </v-btn>
            <v-btn text to="/about" class="no-active">
              <span class="nav-text secondary--text py-2">About</span>
            </v-btn>
            <v-btn text to="/blog" class="no-active">
              <span class="nav-text secondary--text py-2">Blog</span>
            </v-btn>
            <v-btn text to="/contact" class="no-active">
              <span class="nav-text secondary--text py-2">Contact</span>
            </v-btn>
          </v-toolbar-items>
          <v-btn icon class="snipcart-checkout no-active hidden-md-only">
            <v-icon color="highlight">fas fa-shopping-cart</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pa-0">
        <!-- If using vue-router -->
        <slot></slot>
      </v-container>
    </v-main>

    <v-footer app absolute color="#1C1C1C" class="page-footer">
      <v-row class="justify-space-around">
        <v-col cols="auto" class="text-center">
          <p class="white--text body-2">
            Created by
            <a href="https://www.codehunter.io" target="_blank">
              <span class="b-align">code</span>
              <span class="white--text font-weight-bold">Hunter</span>
            </a>
            Web Development
          </p>
        </v-col>
        <v-col cols="auto">
          <p class="white--text body-2">
            © 2020 {{ $static.metadata.siteName }} | All Rights Reserved
          </p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'app',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-text {
  font-size: 1.6em;
  font-family: 'Montserrat', sans-serif !important;
  text-transform: capitalize;
  margin: 0 10px;
}

/* STYLE NAVIGATION DRAWER */
.v-list {
  padding: 50px 0 0 !important;
}
// FOOTER - bottom aligns text in codeHunter
.b-align {
  vertical-align: bottom;
  line-height: 17px;
  color: #22aa00;
  font-size: 0.85em;
  margin-right: 0.5px;
}
.page-footer {
  /* border-top: 1px solid #2a2968; */
  p {
    margin: 0px auto;
  }
}
</style>

<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css');
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 1000px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

.mont {
  font-family: 'Montserrat', sans-serif;
}

/* stops route highlighting of nav buttons */
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
.v-btn:hover {
  .nav-text {
    color: #4a9df8 !important;
  }
}
.custom-header {
  font-size: 3.5vw !important;
}
@media screen and (max-width: 959px) {
  .custom-header {
    font-size: 2.5em !important;
  }
}
</style>
