<script setup>
import {ref, provide} from "vue"
import Fist from "./components/First.vue"
const user = ref("test user");

provide("welcome","hello world");
provide("login")
provide("test",{
  cost:123,
  color:"blue"
});
</script>
<template>
App = {{user}}
<Fist :user="user"/>
</template>

<style scoped>
</style>
