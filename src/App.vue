<script setup lang="ts">
import CardLink from '@/components/CardLink.vue';
import ModalView from '@/components/ModalView.vue';
import { pages } from '@/data';
import type Page from '@/types/Page';
import { ref } from 'vue';

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
      <CardLink
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
