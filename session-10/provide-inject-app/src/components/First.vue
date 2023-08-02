<script setup>
import {defineProps, inject} from 'vue';
import Second from './Second.vue';
const {user} = defineProps(["user"])
const isLogin = inject("login", "ertyuio");

</script>

<template>
    <br />
first = {{user}} = {{isLogin}}
<Second :user="user"/>
</template>

<style scoped>
</style>
