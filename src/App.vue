<script setup lang="ts">
import CardLink from '@/components/CardLink.vue';
import ModalView from '@/components/ModalView.vue';
import { Page, pages } from '@/data';
import { Ref, ref } from 'vue';

const showModal = ref(false);
const modalData: Ref<Page | null> = ref(null);

const handleClick = (page: Page) => {
  showModal.value = true;
  modalData.value = page;
};
</script>

<template>
  <div flex items-center justify-center h-screen>
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
  </div>
  <ModalView v-model="showModal" :data="modalData" />
</template>
