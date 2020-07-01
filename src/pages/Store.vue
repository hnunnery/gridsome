<template>
  <Layout>
    <v-container fluid>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="8"
          md="6"
          lg="4"
          xl="3"
          class="text-center pa-0"
          v-for="product in products"
          :key="product.node.id"
        >
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              class="pa-6 mx-sm-4 mt-sm-4 mb-4 white"
            >
              <h4 class="mont secondary--text" style="font-size: 1.8em;">
                {{ product.node.title }}
              </h4>
              <h4 class="mont secondary--text my-4" style="font-size: 2em;">
                ${{ product.node.price }}
              </h4>
              <p class="description secondary--text text-left mt-6">
                {{ product.node.description }}
              </p>
              <v-img
                :src="product.node.featuredImage"
                :alt="product.node.title"
                height="200"
                contain
                lazy-src
                class="mt-6 mx-auto"
              ></v-img>
              <v-btn
                class="snipcart-add-item highlight white--text mt-12 mont"
                large
                rounded
                :data-item-id="product.node.code"
                :data-item-name="product.node.title"
                :data-item-price="product.node.price"
                :data-item-image="product.node.featuredImage"
                data-item-url="/store"
                :data-item-description="product.node.description"
                >Add to Cart</v-btn
              >
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  allProducts {
    edges {
      node {
        id
        title
        featuredImage (height: 200, quality: 80)
        description
        price
        code
      }
    }
  }
}
</page-query>

<script>
let coinFlip = true;

export default {
  metaInfo: {
    title: 'Store',
  },
  data() {
    return {
      coinFlip: true,
    };
  },
  computed: {
    products() {
      return this.$page.allProducts.edges;
    },
  },
  methods: {
    flipCoin() {
      this.coinFlip = !this.coinFlip;
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 420px) {
  .v-card {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
}
@media screen and (min-width: 960px) {
  .description {
    height: 100px;
  }
}
.v-card {
  border-radius: 15px !important;
}
.v-btn {
  transition: all 0.2s ease-in-out;
}
.v-btn:hover {
  transform: scale(1.1);
}
</style>
