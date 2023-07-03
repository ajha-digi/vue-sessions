<script setup>
import {ref} from 'vue';
const isShow= ref(true);
</script>

<template>
  <div v-if="isShow" > </div>
  <button @click="isShow = !isShow">Toggle Box</button>
</template>

<style scoped>

div {
    width: 200px;
    height: 200px;
    background: black;
}

button {
    background: blue;
    padding: 10px 15px;
    color: white;
    cursor: pointer;
    margin-top:10px
}

</style>
