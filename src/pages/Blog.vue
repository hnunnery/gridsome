<template>
  <Layout>
    <v-container>
      <v-row class="justify-center">
        <v-col
          cols="12"
          lg="6"
          v-for="post in posts"
          :key="post.node.id"
          @click="onClick(post)"
          style="cursor: pointer;"
        >
          <v-card flat>
            <v-row class="justify-space-around align-center">
              <v-col>
                <v-img
                  v-if="post.node.featuredImage != null"
                  :src="post.node.featuredImage"
                  alt="blog image"
                  lazy-src
                  class="mx-auto mb-6"
                ></v-img>
                <h3
                  class="display-1 secondary--text text-center mb-6"
                  style="line-height: 1em;"
                >
                  {{ post.node.title }}
                </h3>
                <p class="body-2 text-left secondary--text">
                  {{ post.node.date_ }}
                </p>
                <p class="body-1 text-left secondary--text">
                  <span v-html="post.node.preview" style="line-height: 1.7em;">
                  </span>
                  <span class="font-weight-bold">&nbsp; Read More</span>
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        path
        date_
        content
        preview
        featuredImage
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog',
  },
  computed: {
    posts() {
      this.$page.allPost.edges.forEach((post) => {
        console.log(post.node.date);
      });
      const x = this.$page.allPost.edges.sort((a, b) =>
        a.node.date < b.node.date ? -1 : 1
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
