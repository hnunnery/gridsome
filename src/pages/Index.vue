<template>
  <Layout>
    <v-container>
      <v-row
        justify="center"
        align="center"
        v-for="section in sections"
        :key="section.node.id"
      >
        <v-col class="mb-12">
          <h1
            class="custom-header mont secondary--text text-center mt-md-5 mb-5 mb-md-12"
            style="line-height: 1em;"
          >
            {{ section.node.title }}
          </h1>
          <p class="body-1 secondary--text mt-6" style="line-height: 2em;">
            {{ section.node.paraOne }}
          </p>
          <p class="body-1 secondary--text mt-6" style="line-height: 2em;">
            {{ section.node.paraTwo }}
          </p>
        </v-col>
      </v-row>

      <v-row class="justify-center my-12 pb-12">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="post in posts.slice(0, 4)"
          :key="post.node.id"
          @click="onClick(post)"
          style="cursor: pointer;"
        >
          <v-card flat>
            <v-img
              :src="post.node.featuredImage"
              :alt="post.node.alt"
              class="mx-auto mb-6"
              lazy-src
            ></v-img>
            <h3
              class="title secondary--text text-center mb-6"
              style="line-height: 1em;"
            >
              {{ post.node.title }}
            </h3>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  allHome {
    edges {
      node {
        id
        featuredImage
        title
        paraOne
        paraTwo
      }
    }
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        path
        date
        content
        preview
        featuredImage
        alt
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
  computed: {
    sections() {
      return this.$page.allHome.edges;
    },
    posts() {
      const x = this.$page.allPost.edges.sort((a, b) =>
        Date.parse(a.node.date) > Date.parse(b.node.date) ? -1 : 1
      );
      return x;
    },
  },
  methods: {
    onClick(post) {
      this.$router.push({ path: post.node.path });
    },
  },
};
</script>
