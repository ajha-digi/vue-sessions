<script setup>
    import { useName } from "./composables/name.js";
    import AnotherVue from "./components/Another.vue";
    import {ref} from "vue";

    import {useFetch} from "./composables/fetch";

    const { firstName, lastName } = useName();

    let URL= ref('https://jsonplaceholder.typicode.com/posts/1')
    

    function changeUrl() {
        URL.value= 'https://dummyjson.com/products/1';
    }

    const {data, error} = useFetch(URL)
</script>

<template>
    <h1>Composable App !!</h1>
    <h2>
        Full name : {{ firstName }} {{ lastName }}
    </h2>
    <AnotherVue />

    <div v-if="error">
        OOps !! Something went wrong !!
    </div>

    <div v-else-if="data">
        <pre>{{data}}</pre>
    </div>

    <div v-else>
        loading .....
    </div>

<button @click="changeUrl">Change URL</button>
</template>

<style scoped></style>
