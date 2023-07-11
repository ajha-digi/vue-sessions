<script setup>
import {RouterView, RouterLink} from "vue-router";
</script>

<template>
  <main>
    <header>
      <nav>
        <RouterLink to="/" active-class="active">Home</RouterLink>
        <RouterLink to="/about" active-class="active">About</RouterLink>
        <RouterLink to="/contact" active-class="active">Conatct</RouterLink>
      </nav>
    </header>
    <RouterView />
  </main>
</template>

<style scoped>
.active{
  color: blueviolet;
  font-size: 20px;
  font-weight: bolder;

}
</style>
