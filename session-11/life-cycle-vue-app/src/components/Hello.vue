<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from "vue";
onBeforeMount(()=>{
  console.log("onBeforeMount called - Child")
})
onMounted(()=>{
  console.log("onMounted called - Child")
})

onBeforeUpdate(()=>{
  console.log("onBeforeUpdate called - Child")
})

onUpdated(()=>{
  console.log("onUpdated called - Child")
})

onBeforeUnmount(()=>{
  console.log("onBeforeUnmount called - Child")
})

onUnmounted(()=>{
  console.log("onUnmounted called - Child")
})

</script>

<template>
  <h1>Hello</h1>
</template>

<style scoped>
</style>