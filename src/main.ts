import { createApp } from 'vue';
import urql, { cacheExchange, fetchExchange } from '@urql/vue';

import App from '@/App.vue';
import '@unocss/reset/eric-meyer.css';
import 'virtual:uno.css';

createApp(App)
  .use(urql, {
    url: 'http://polewidzenia.local/graphql',
    exchanges: [cacheExchange, fetchExchange],
  })
  .mount('#app');
