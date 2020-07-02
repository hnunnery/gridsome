<template>
  <Layout>
    <v-container>
      <v-row
        justify="center"
        align="center"
        v-for="section in sections"
        :key="section.node.id"
      >
        <v-col cols="12" lg="10" xl="8" class="mb-12">
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
  },
};
</script>
