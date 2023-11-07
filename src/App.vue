<script setup lang="ts">
import MenuCard from '@/components/MenuCard.vue';
import ModalView from '@/components/ModalView.vue';
import { pages } from '@/data';
import type Page from '@/types/Page';
import { ref } from 'vue';
import { useQuery, gql } from '@urql/vue';

const ShowMenuItems = gql`
  query ShowMenuItems {
    menuItems {
      nodes {
        id
        label
      }
    }
  }
`;

const { fetching, data, error } = useQuery({ query: ShowMenuItems });

const showModal = ref(false);
const modalData = ref<Page | null>(null);

const handleClick = (page: Page) => {
  showModal.value = true;
  modalData.value = page;
};
</script>

<template>
  <div v-if="fetching">Loading...</div>
  <div v-else-if="error">{{ error.message }}</div>
  <div v-else>
    <ul>
      <li v-for="item of data.menuItems.nodes" :key="item.id">{{ item.label }}</li>
    </ul>
  </div>
  <main flex items-center justify-center h-screen>
    <div flex flex-wrap gap-5 w-235>
      <MenuCard
        v-for="page in pages"
        :key="page.id"
        :img-url="page.imgUrl"
        :has-content="page.hasContent"
        :title="page.title"
        @click="page.hasContent && handleClick(page)"
      />
    </div>
  </main>
  <Teleport to="body">
    <ModalView v-model="showModal" :data="modalData" />
  </Teleport>
</template>
