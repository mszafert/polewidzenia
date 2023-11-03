<script setup lang="ts">
import CardLink from '@/components/CardLink.vue';
import ModalView from '@/components/ModalView.vue';
import { ref } from 'vue';

const pages = ref([
  { id: 1, url: '#', title: 'zajęcia cykliczne', image: '/src/assets/img01.jpg' },
  { id: 2, url: '#', title: 'kontakt, o nas, dokumenty', image: '/src/assets/img02.jpg' },
  { id: 3, url: '#', title: 'wakacje, ferie zimowe', image: '/src/assets/img03.jpg' },
  { id: 4, url: '#', title: 'warsztaty weekendowe', image: '/src/assets/img04.jpg' },
  { id: 6, url: '', title: ' ', image: '' },
  { id: 5, url: '#', title: 'przygotowanie do egzaminów', image: '/src/assets/img06.jpg' },
  { id: 7, url: '#', title: 'warsztaty dla szkół', image: '/src/assets/img07.jpg' },
  { id: 8, url: '#', title: 'warsztaty dla biznesu', image: '/src/assets/img08.jpg' },
  { id: 9, url: '#', title: 'ceramika', image: '/src/assets/img09.jpg' },
]);

const showModal = ref(false);

const handleClick = () => {
  showModal.value = true;
};
</script>

<template>
  <div flex items-center justify-center h-screen>
    <div flex flex-wrap gap-5 w-235>
      <CardLink
        v-for="page in pages"
        :key="page.id"
        :image-url="page.image"
        :url="page.url"
        :title="page.title"
        @click="handleClick()"
      />
    </div>
  </div>
  <ModalView v-model="showModal" />
</template>
