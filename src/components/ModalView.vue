<script setup lang="ts">
import type Page from '@/types/Page';
import { ref } from 'vue';

defineProps<{
  modelValue: boolean;
  data: Page | null;
}>();

const innerModal = ref(null);
const emit = defineEmits<{
  'update:modelValue': [modelValue: boolean];
}>();

const handleButtonClick = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <Transition>
    <div v-if="modelValue">
      <div bg-op-30 bg-black fixed flex h-screen top-0 transpare w-screen>
        <div ref="innerModal" class="modal-container">
          <header mb-7>
            <div flex items-center justify-between>
              <div flex items-center>
                <img src="/polewidzenia.svg" alt="Logo" w-15 />
                <h2 ml-5 font-600>Pracownia artystyczna <br />Pole Widzenia</h2>
              </div>
              <button
                bg-transparent
                border-0
                cursor-pointer
                opacity-50
                transition-opacity-200
                hover:opacity-100
                @click="handleButtonClick"
              >
                <div i-mdi-close text-10 />
              </button>
            </div>
            <div h-35 mt-5 overflow-hidden relative rounded-3>
              <figure bg-gray-2>
                <img :src="data?.imgUrl" alt="Image" absolute h-full object-cover w-full />
              </figure>
              <h1 class="page-title">{{ data?.title }}</h1>
            </div>
          </header>
          <div class="body-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur esse
              earum, repellat necessitatibus ea possimus dolorum, soluta magni cum quam dolorem
              distinctio nisi eligendi doloribus blanditiis molestiae eum quod.
            </p>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
              culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
              cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
              amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
              officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia
              dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id
              nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
              ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
              consectetur et est culpa et culpa duis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe quae nam illum ab
              corporis necessitatibus, minima laudantium sequi temporibus. Id quibusdam accusantium
              assumenda asperiores veniam consectetur expedita est aliquid!
            </p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-container {
  @apply bg-white font-robotoslab ma p-7 rounded-3 shadow-xl w-235;
}

.page-title {
  @apply absolute bottom-5 color-white font-600 right-5 text-7 text-right text-shadow-sm uppercase;
}

.body-container {
  @apply bg-gray-50 px-7 py-2 rounded-3 line-height-normal;
}

.body-container p {
  @apply my-3;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
