<template>
  <div class="books-list-page">
    <NavBar />
    <div class="form-container">
      <div class="form">
        <b-form @submit="onSubmit">
          <b-form-input
            v-model="form.id"
            placeholder="      Buscar pelo id ( digite o id e pressione enter)"
          >
          </b-form-input>
        </b-form>
      </div>
      <b-button @click="listAvailables">Listar Disponíveis</b-button>
      <b-button @click="listAll">Listar Todos</b-button>
    </div>
    <div class="table-container">
      <div class="table-spacement"></div>  
      <b-table :items="books" class="table-content"></b-table>
    </div>
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
    onSubmit(event) {
      event.preventDefault();
      if (this.form.id === "") {
        return this.listAll();
      }
      API.getById(this.form.id)
        .then(({ data }) => (this.books = [data]))
        .catch(() => alert("Nenhum livro encontrado, verifique o id"));
    },

    listAll() {
      return API.listAll().then(({ data }) => (this.books = data));
    },

    listAvailables() {
      return API.listAvailables().then(({ data }) => (this.books = data));
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
  width: 78vw;
}
.table-container {
  background-color: rgba(37, 34, 34, 0.2);
  background-image: url("../assets/books.png");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.6;
  width: 100vw;
  height: 100vh;
}

.table-content{
  background-color: whitesmoke;
  width: 80vw;
  margin-left: 10vw;
}

.table-spacement{
  height: 10vh;
  width: 100vw;

}
</style>
