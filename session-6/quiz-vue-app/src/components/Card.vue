<script setup>
    import { defineProps } from 'vue';
    const {quiz} = defineProps(['quiz']);
</script>

<template>
    <div class="card">
        <img :src="quiz.img" alt="quiz.name">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} Questions</p>
        </div>
    </div>
</template>

<style scoped>

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card-text {
  padding: 0 5px;
}

.card-text h2 {
  font-weight: bold;
}
</style>