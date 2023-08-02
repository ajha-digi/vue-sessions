<script setup>
import {defineProps, inject} from "vue"
import Third from './Third.vue';
const {user} = defineProps(["user"])
const value = inject("welcome");
</script>

<template>
    <br />
    {{value}}
second = {{user}}
<Third :user="user" />

</template>

<style scoped>
</style>
