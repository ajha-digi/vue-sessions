<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from "vue";
import HelloVue from "./components/Hello.vue";
const showHelloComponent = ref(true);
const count = ref(0);

onBeforeMount(()=>{
  console.log("onBeforeMount called - Parent")
})

onMounted(()=>{
  console.log("onMounted called - Parent")
})

onBeforeUpdate(()=>{
  console.log("onBeforeUpdate called - Parent")
})

onUpdated(()=>{
  console.log("onUpdated called - Parent")
})

onBeforeUnmount(()=>{
  console.log("onBeforeUnmount called - Parent")
})

onUnmounted(()=>{
  console.log("onUnmounted called - Parent")
})

</script>

<template>
  <h1>Test</h1>
  {{ count }}
  <HelloVue v-if="showHelloComponent" />
  <button @click="showHelloComponent = !showHelloComponent">Toggle Hello</button>
  <button @click="count++">Increment</button>
</template>

<style scoped></style>
