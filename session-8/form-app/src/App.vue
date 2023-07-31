<script setup>
import {ref} from "vue";

// const fname = ref("");
// const lname = ref("");

const user = ref({
  fname:"",
  lname: ""
})

const handleSubmit = (e) => {
  // e.preventDefault();
  // if(!fname.value && !lname.value) {
  //   alert("Empty filed")
  //   return false
  // }
  // const formData = {
  //   fname: fname.value,
  //   lname: lname.value
  // }
  // console.log(formData);

  console.log(user.value);
}


</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="first name" v-model="user.fname" />
    <input type="text" placeholder="last name" v-model="user.lname"  />
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped></style>


