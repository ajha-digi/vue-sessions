<script setup>
import { useName } from "../composables/name";
const { firstName, lastName } = useName();
</script>

<template>
    <h1>Composable App !!</h1>
    <h2>
        Full name from Another vue component : {{ firstName }} {{ lastName }}
    </h2>
</template>

<style scoped></style>
