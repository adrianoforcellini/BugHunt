<template>
  <div class="home">
    <NavBar />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import API from "@/services/APIs";

export default {
  name: "EditBook",
  components: { NavBar },
  data() {
    return {
      msg: "Criar Livros"
    };
  },
};
</script>
