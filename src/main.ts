import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { createApp, h, provide } from 'vue';

import App from '@/App.vue';
import '@unocss/reset/eric-meyer.css';
import 'virtual:uno.css';

const httpLink = createHttpLink({ uri: 'http://polewidzenia.local/graphql' });
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({ link: httpLink, cache });

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
}).mount('#app');
