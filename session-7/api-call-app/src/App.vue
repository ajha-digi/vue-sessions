<script setup>
import { ref } from "vue";
import axios from "axios";

const posts = ref([]);
const title = ref("");
const author = ref("");

  const getAllPost = async () => {
    const {data} = await axios.get(`http://localhost:3000/posts`);
    posts.value = data;
  }

  getAllPost()

  const sendPost = async () => {
    const payload = { 
      "id": posts.value.length + 1, 
      "title":title.value, 
      "author": author.value
    }
    await axios.post(`http://localhost:3000/posts`,payload);
    title.value = "";
    author.value=""
    getAllPost()
  }

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`)
    getAllPost()
  }

</script>

<template>
  <h1>Posts</h1>
  <div>
    <input v-model="title"/>
    <input v-model="author"/>
    <NButton type="primary"  @click="sendPost">
      Save
    </NButton>
    <!-- <button type="submit">Save</button> -->
  </div>
  <div>
    <ul v-for="post in posts" :key="post.id">
      <li>{{post.title}} <span @click="deletePost(post.id)">X</span></li>
    </ul>
  </div>
  <NRate />

</template>

<style scoped>

</style>
