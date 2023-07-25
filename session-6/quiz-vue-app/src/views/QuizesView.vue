<script setup>
import { ref, watch } from "vue";
import quizeData from "../data/quizes.json";
import Card from "../components/Card.vue";
const quizes = ref(quizeData);
const search = ref("");
const showCard = ref(false);

watch(search, () => {
  quizes.value = quizeData.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
});

</script>

<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input type="text" placeholder="Search ...." v-model="search" />
    </header>

    <div class="options-container">
      <TransitionGroup name="card">
        <Card v-if="!showCard" v-for="quiz in quizes" :quiz="quiz" :key="quiz.id" />
    </TransitionGroup>
    <!-- <button  @click="showCard = !showCard" >Show</button> -->
    </div>

  </div>
</template>

<style scoped>

header {
  display: flex;
  margin-bottom: 10px;
  margin-top: 30px;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

.card-enter-from {
  transform: translateY(-100px);
  opacity: 0;
}
.card-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.card-enter-active {
  transition: all 2s ease;
}

</style>
