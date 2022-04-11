<template>
  <div class="add-book-page">
    <NavBar />
    <div class="form-bk">
      <div class="form-spacement"></div>
      <div class="form-container">
        <Form
          :onClick="onClick"
          :placeholder="placeholder"
          :addOrEdit="addOrEdit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Form from "@/components/Form";
import API from "@/services/APIs";

export default {
  name: "AddBook",
  components: { NavBar, Form },
  data() {
    return {
      placeholder: "Escreva aqui o título do livro",
      addOrEdit: "Enviar",

      onClick(id, form) {
        const { title, author, checked } = form;
        if (title.length < 3 || title.length > 60) {
          return alert("O título deve ter entre 3 e 60 caracteres.");
        }
        if (author.length < 3 || author.length > 60) {
          return alert("O nome do autor deve ter entre 3 e 60 caracteres.");
        }
        const body = {
          title,
          author,
          available: checked
        };
        API.addBook(body)
          .then(alert("Livro Adicionado Á Lista"))
          .catch(error => alert(error));
      }
    };
  }
};
</script>

<style scoped>
.form-bk {
  background-image: url("../assets/library.jpg");
  height: 100vh;
  opacity: 0.8;
  width: 100vw;
}

.form-container {
  background-color: whitesmoke;
  margin-left: 20vw;
  padding: 5vh;
  width: 60vw;
}

.form-spacement {
  height: 15vh;
  width: 100vw;
}
</style>
