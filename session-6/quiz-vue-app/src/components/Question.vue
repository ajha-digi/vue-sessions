<script setup>
    import {defineProps, defineEmits} from "vue";
    const {question} = defineProps(["question"]);
    // console.log("Question", question)
    const emit = defineEmits(["selectOption"])

    const emitSelectOption = (isCorrect) => {
        emit("selectOption", isCorrect)
    }
</script>

<template>
    <div class="question-container">
        <h1 class="question">
            {{ question.text }}
        </h1>
    </div>
    <div class="options-container">
        <div v-for="option in question.options" :key="option.id" class="option" @click="emitSelectOption(option.isCorrect)">
            <p class="option-label">{{option.label}}</p>
            <div class="option-value">
                <p>{{option.text}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-container {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-style: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.option-value {
    width: 60%;
    font-style: 30px;
    padding: 10px;
    background-color: rgb(244, 239, 239);
}
</style>