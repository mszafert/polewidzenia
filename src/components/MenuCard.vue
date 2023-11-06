<script setup lang="ts">
defineProps<{
  imgUrl: string;
  title: string;
  hasContent: boolean;
}>();
</script>

<template>
  <div
    v-if="hasContent"
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
      <img v-if="imgUrl" :src="imgUrl" alt="" absolute h-full inset-0 object-cover w-full />
    </figure>
    <h3 bg-white font-400 font-robotoslab m-0 p-3 text-4 text-center>{{ title }}</h3>
  </div>
  <div v-else flex items-center justify-center w-75>
    <div text-center>
      <img :src="imgUrl" alt="Logo" />
      <h1 font-600 font-robotoslab m-0 mt-3 px-12 text-4>Pracownia artystyczna Pole Widzenia</h1>
    </div>
  </div>
</template>
