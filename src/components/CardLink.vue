<script setup lang="ts">
defineProps<{
  imageUrl?: string;
  title: string;
  url?: string;
}>();
</script>

<template>
  <div
    v-if="url"
    cursor-pointer
    flex
    flex-col
    opacity-50
    overflow-hidden
    rounded-2
    shadow-xl
    transition-opacity-300
    w-75
    hover:opacity-100
  >
    <figure h-40 m-0 relative>
      <img v-if="imageUrl" :src="imageUrl" alt="" absolute h-full inset-0 object-cover w-full />
    </figure>
    <h3 bg-white font-400 font-robotoslab m-0 p-3 text-4 text-center>{{ title }}</h3>
  </div>
  <div v-else flex items-center justify-center w-75>
    <div text-center>
      <img src="/polewidzenia.svg" alt="" />
      <h1 font-600 font-robotoslab m-0 mt-3 text-4>
        Pracownia artystyczna<br />
        Pole Widzenia
      </h1>
    </div>
  </div>
</template>
