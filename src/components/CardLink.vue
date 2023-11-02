<script setup lang="ts">
defineProps<{
  imageUrl?: string;
  title: string;
  url?: string;
}>();
</script>

<template>
  <div bg-slate-1 flex flex-col overflow-hidden rounded-2 shadow-xl w-75>
    <figure h-40 m-0 relative>
      <img v-if="imageUrl" :src="imageUrl" alt="" absolute h-full inset-0 object-cover w-full />
    </figure>
    <h3 bg-white font-3 font-robotoslab m-0 p-3 text-4 text-center>{{ title }}</h3>
  </div>
</template>
