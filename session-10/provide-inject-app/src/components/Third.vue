<script setup>
import {defineProps, inject} from "vue";
import Four from "./Four.vue";

const {user} = defineProps(["user"]);
const value = inject("welcome");
</script>

<template>
    <br />
 Third ={{user}}
 {{value}}
 <Four />
</template>

<style scoped>
</style>
