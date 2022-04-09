<template>
  <div class="home">
    <NavBar />
    <div class="form-container">
      <div class="form">
        <b-form @submit="onSubmit">
          <b-form-input
            v-model="form.id"
            placeholder="Buscar pelo id ( digite o id e pressione enter)"
          >
          </b-form-input>
        </b-form>
      </div>
      <b-button @click="onClick">Listar Todos</b-button>
    </div>
    <b-table striped hover :items="books"></b-table>
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
      form: {
        id: ""
      },
      books: []
    };
  },
  methods: {
    onSubmit() {
      if (this.form.id === "") {
        return this.listAll();
      }
      API.getById(this.form.id)
        .then(({ data }) => (this.books = [data]))
        .catch(() => alert("Nenhum livro encontrado, verifique o id"));
    },
    onClick() {
      this.listAll();
    },
    listAll() {
      return API.listAll().then(({ data }) => (this.books = data));
    }
  },
  mounted() {
    this.listAll();
  }
};
</script>
<style scoped>
.form-container {
  display: flex;
}
.form {
  width: 90vw;
}
</style>
