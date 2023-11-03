<script setup lang="ts">
import { Page } from '@/data';

defineProps<{
  modelValue: boolean;
  data: Page | null;
}>();

const emit = defineEmits<{
  'update:modelValue': [modelValue: boolean];
}>();

const handleButtonClick = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <Teleport v-if="modelValue" to="body">
    <div bg-op-30 bg-black fixed flex h-screen top-0 transpare w-screen>
      <div bg-white font-robotoslab ma p-7 rounded-3 shadow-xl w-235>
        <header mb-7>
          <div flex items-center>
            <img src="/polewidzenia.svg" alt="" w-15 />
            <h2 ml-5 font-600>
              Pracownia artystyczna <br />
              Pole Widzenia
            </h2>
          </div>
          <div>
            <h1>{{ data?.title }}</h1>
          </div>
        </header>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur esse
            earum, repellat necessitatibus ea possimus dolorum, soluta magni cum quam dolorem
            distinctio nisi eligendi doloribus blanditiis molestiae eum quod.
          </p>
          <button @click="handleButtonClick">Close modal</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
