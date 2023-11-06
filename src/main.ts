import App from '@/App.vue';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import '@unocss/reset/eric-meyer.css';
import 'virtual:uno.css';
import { createApp, h, provide } from 'vue';

const httpLink = createHttpLink({ uri: 'http://polewidzenia.local/graphql' });
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({ link: httpLink, cache });

createApp({
  setup() {
    provide(ApolloClient, { default: apolloClient });
  },
  render: () => h(App),
}).mount('#app');
