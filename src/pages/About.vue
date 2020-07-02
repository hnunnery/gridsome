<template>
  <Layout>
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" lg="10" xl="8" class="mb-12">
          <h1
            class="custom-header mont secondary--text text-center mb-6 mb-md-10"
          >
            About Us
          </h1>
          <p class="body-1 secondary--text" style="line-height: 2.5em;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ad debitis
            assumenda sunt hic eum necessitatibus in blanditiis veritatis?
            Laboriosam maxime suscipit a numquam nostrum quam optio voluptates
            deserunt ex quasi. Error doloremque omnis animi, eligendi magni a
            voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem
            dolores inventore iste reprehenderit maxime! Iusto.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      name: 'about',
    };
  },
  metaInfo: {
    title: 'About us',
  },
};
</script>
