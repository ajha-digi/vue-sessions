<script setup>
import {ref} from 'vue';
const state = ref(0);
</script>

<template>
  <section>
        <h4>Counter App</h4>
        <div>
            <button @click="state++">+</button>
            <span>{{ state }}</span>
            <button @click="state--">-</button>
        </div>
    </section>
</template>

<style>

section{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: aquamarine;
}

button {
    padding: 10px 20px;
    cursor: pointer;
    outline:none;
    border: none;
    margin: 0px 10px;
    background-color: rgba(0, 0, 255, 0.462);
    border-radius: 10px;
    color: white;
}

</style>
