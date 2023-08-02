<script setup>
import {inject} from "vue";
const value = inject("test", true);
</script>

<template>
    <br />
 Four = {{value}}
</template>

<style scoped>
</style>