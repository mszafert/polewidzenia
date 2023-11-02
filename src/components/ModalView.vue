<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const handleButtonClick = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <Teleport v-if="modelValue" to="body">
    <div bg-op-30 bg-black fixed flex h-screen top-0 transpare w-screen>
      <div bg-white font-robotoslab ma p-7 rounded-5 shadow-xl w-235>
        <header mb-7>
          <div flex items-center>
            <img src="/polewidzenia.svg" alt="" w-15 />
            <h2 ml-5 font-600>
              Pracownia artystyczna <br />
              Pole Widzenia
            </h2>
          </div>
          <div>
            <h1>Title</h1>
          </div>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur esse earum,
          repellat necessitatibus ea possimus dolorum, soluta magni cum quam dolorem distinctio nisi
          eligendi doloribus blanditiis molestiae eum quod.
        </p>
        <button @click="handleButtonClick">Close modal</button>
      </div>
    </div>
  </Teleport>
</template>
