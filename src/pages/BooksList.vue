<template>
  <div class="home">
    <NavBar />
  <table border="3">
    <tr>
        <td>Livro</td>
        <td>Autor</td>
        <td>Disponivel</td>
    </tr>
    <tr v-for="book of books" :key="book._id">
        <td>{{book.title}}</td>
        <td>{{book.author}}</td>
        <td>{{book.available ? "Sim" : "Não" }}</td>
    </tr>
</table>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import API from "@/services/APIs";

export default {
  name: "Home",
  components: { NavBar },
  data() {
    return {
      books: []
    };
  },
  mounted() {
    API.listAll().then(({ data }) => this.books = data);
  }
};
</script>
