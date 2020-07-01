<template>
  <Layout>
    <v-container fluid px-0>
      <v-row justify="space-around" mt-12>
        <v-col cols="12" lg="10" xl="8">
          <h1
            class="custom-header mont grey--text text--darken-3 text-center mb-1 mb-md-10"
          >
            Contact Us
          </h1>

          <v-row justify="space-around" align="center">
            <v-col cols="12" sm="10" md="6">
              <v-card class="mt-0 mb-12 pa-0 white" elevation="0">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  class="px-6 py-4"
                >
                  <!-- NETLIFY FORM NAME -->
                  <input type="hidden" name="form-name" value="contact" />
                  <!-- NETLIFY BOT FIELD -->
                  <input type="text" name="bot-field" style="display: none;" />
                  <v-text-field
                    name="name"
                    label="Name"
                    prepend-inner-icon="perm_identity"
                    outlined
                    rounded
                    clearable
                    required
                    class="mb-1 form highlight--text"
                  ></v-text-field>
                  <v-text-field
                    type="email"
                    name="email"
                    label="Email"
                    prepend-inner-icon="mail_outline"
                    outlined
                    rounded
                    clearable
                    required
                    class="my-1 form highlight--text"
                  ></v-text-field>

                  <v-textarea
                    name="message"
                    label="Message"
                    prepend-inner-icon="message"
                    rows="4"
                    outlined
                    rounded
                    clearable
                    required
                    class="my-1 form highlight--text"
                  ></v-textarea>
                  <div class="text-center">
                    <v-btn
                      x-large
                      rounded
                      clearable
                      type="submit"
                      class="highlight white--text px-10"
                      >Submit</v-btn
                    >
                  </div>
                </form>
              </v-card>
            </v-col>
            <v-col cols="12" md="6" lg="5">
              <div class="text-left">
                <a href="mailto:test@gmail.com">
                  <v-row justify="center" class="pb-6">
                    <v-col cols="3" class="text-center">
                      <v-icon size="45px" class="highlight--text"
                        >fas fa-envelope</v-icon
                      >
                    </v-col>
                    <v-col cols="9">
                      <h4 class="secondary--text display-1">Send an email</h4>
                      <p class="secondary--text subtitle-1">test@gmail.com</p>
                    </v-col>
                  </v-row>
                </a>
              </div>
              <div class="text-xs-left">
                <a href="tel:123-486-3408">
                  <v-row justify="center" class="pb-6">
                    <v-col cols="3" class="text-center">
                      <v-icon size="45px" class="highlight--text"
                        >fas fa-mobile-alt</v-icon
                      >
                    </v-col>
                    <v-col cols="9">
                      <h4 class="secondary--text display-1">Give us a ring</h4>
                      <p class="secondary--text subtitle-1">(123) 486-3408</p>
                    </v-col>
                  </v-row>
                </a>
              </div>
              <div class="text-xs-left">
                <v-row justify="center" class="pb-6">
                  <v-col cols="3" class="text-center">
                    <v-icon size="45px" class="highlight--text"
                      >fas fa-map-marked-alt</v-icon
                    >
                  </v-col>
                  <v-col cols="9">
                    <h4 class="secondary--text display-1">
                      <span class="hide-on-mobile">Mailing</span> Address
                    </h4>
                    <p class="secondary--text subtitle-1">
                      123 Main Street
                      <br />Tempe, Arizona 85282
                    </p>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      name: 'contact',
    };
  },
  metaInfo: {
    title: 'Contact Us',
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 15px !important;
}
.v-btn {
  transition: all 0.2s ease-in-out;
}
.v-btn:hover {
  transform: scale(1.1);
}

/* input,
textarea,
select,
.sixteen {
  font-size: 16px;
}

input,
textarea {
  width: 100%;
  display: block;
  border: none;
  padding: 30px 0 0 0;
  border-bottom: solid 1px highlight;
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  &:focus,
  &:valid {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
    &::-webkit-input-placeholder {
      color: var(--orange);
      font-size: 11px;
      transform: translateY(-20px);
      visibility: visible !important;
    }
  }
}

/* CSS for Select Component */
/* .custom-select select {
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  -webkit-appearance: none;
  padding: 0 50px 0 20px;
  cursor: pointer;
  text-indent: 5px;
}

.custom-select .select {
  position: relative;
  background: #fff;
  border: 1px solid var(--orange);
  height: 50px;
  cursor: pointer;
}

.custom-select .select:focus {
  outline: none;
}

.custom-select .select:before {
  content: "";
  background: var(--orange);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 40px;
  pointer-events: none;
}

.custom-select .select:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 7px 0;
  border-color: #fff transparent transparent transparent;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
}

.custom-select .select::-ms-expand {
  display: none;
} */
</style>
