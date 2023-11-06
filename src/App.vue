<script setup lang="ts">
import MenuCard from '@/components/MenuCard.vue';
import ModalView from '@/components/ModalView.vue';
import { pages } from '@/data';
import type Page from '@/types/Page';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { computed, ref } from 'vue';

const { result } = useQuery(gql`
  query getMenuItems {
    menuItems {
      nodes {
        id
        label
      }
    }
  }
`);
const menuItems = computed(() => result.value?.menuItems.nodes);
console.log(menuItems);

const showModal = ref(false);
const modalData = ref<Page | null>(null);

const handleClick = (page: Page) => {
  showModal.value = true;
  modalData.value = page;
};
</script>

<template>
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
