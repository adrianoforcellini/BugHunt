<template>
  <div class="home">
    <NavBar />
    <h1>{{ msg }}</h1>
    <router-link to="bookslist">Ver Livros</router-link>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "Home",
  components: { NavBar },
  data() {
    return {
      msg: "Home Page"
    };
  }
};
</script>
