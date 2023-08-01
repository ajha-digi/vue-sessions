<script setup>
  import { ref } from "vue";
  import Hello from "./components/Hello.vue";
  import Layout from "./components/Layout.vue";
  
  const name = ref("sai");
</script>

<template>
  <!-- <h1>Slot</h1> -->
  <!-- <Hello name="<h2>ajeet</h2>"/>
  <br />
  <Hello name="<h3>sudeep</h3>"/> -->
  <!-- <Hello>
    <h1>
        Hello from Parent 
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed eligendi esse praesentium eaque facilis ipsa odit quia dignissimos alias amet incidunt natus quas recusandae corporis, odio optio doloremque officiis quidem!
      </p>
  </Hello> -->
  <!-- <Hello>
    <h2>Hellllllllooooo {{name}}</h2>
  </Hello> -->
  <Layout>
    <template #header>
      <header>This is header part</header>
    </template>
    <template v-slot:side>
      <aside>This is aside part</aside>
    </template>
    <template #main>
      <main>This is main part</main>
    </template>
    <template #footer>
      <footer>This is footer part</footer>
    </template>
    <template #default>
      <h2>Default one</h2>
    </template>
  </Layout>
</template>

<style scoped>

</style>
