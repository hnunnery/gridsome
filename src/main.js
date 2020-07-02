// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { appOptions, head }) {
  head.link.push(
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Montserrat',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.css',
    }
  );

  // Add an external Javascript before the closing </body> tag
  head.script.push({
    type: 'text/javascript',
    src: 'https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.js',
    body: true,
  });

  // Add a meta tag
  head.meta.push({
    key: 'description',
    name: 'description',
    content: 'Place site description here.',
  });

  const opts = {
    theme: {
      themes: {
        light: {
          primary: '#4A9DF8',
          highlight: '#4A9DF8',
          secondary: '#424242',
        },
      },
    },
  }; //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
