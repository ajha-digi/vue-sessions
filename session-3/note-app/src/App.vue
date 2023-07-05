<script setup>
  import {ref} from 'vue';
  const isModalOpne = ref(false);
  const newNote = ref("");
  const errorMessage = ref("");
  const notes = ref([]);

  function randomColor() {
    return 'hsl(' + (Math.random() * 360) + ', 100%, 75%)';
  }

  const addNotes = () => {

    if(newNote.value.length < 10){
      return errorMessage.value = "Note Needs to be 10 Characters or more !!"
    }

    notes.value.push({
      id: Math.floor(Math.random() * 1000000),
      text: newNote.value,
      date: new Date(),
      background: randomColor()
    });
    newNote.value="";
    isModalOpne.value=false;
    errorMessage.value="";
  }


</script>

<template>
  <main>
    <div v-if="isModalOpne" class="overlay">
      <div class="modal">
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p class="error" v-if="errorMessage" >{{errorMessage}}</p>
        <button @click="addNotes">Add Note</button>
        <button class="close" @click="isModalOpne = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="isModalOpne = true">+</button>
      </header>
      <div class="cards-container">
        <div 
          v-for="note in notes"
          :key="note.id"
          :style="{backgroundColor:note.background}"
          class="card"
        >
            <p class="main-text">{{note.text}}</p>
            <p class="date">{{note.date.toLocaleDateString("en-US")}}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 90vw
  }

  .container {
    max-width: 800px;
    padding: 10px;
    margin: 0 auto
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

  header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21,20,20);
    border-radius: 100%;
    color: white;
    font-size: 20px;
  }

  .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .date {
    font-size: 12.5px;
    font-weight: bold;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
  }

  .overlay {
    position: absolute;
    width: 98vw;
    height: 100%;
    background-color: rgba(0,0,0,0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px
  }

  .modal .close {
    background-color: rgb(193, 15, 15);
    margin-top: 7px;
  }

  .error{
    color: brown;
  }

</style>
