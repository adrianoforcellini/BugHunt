<template>
  <div class="add-book-page">
    <NavBar />
    <div class="form-bk">
      <div class="form-spacement"></div>
      <div class="form-container">
        <Form
          :onSubmit="onSubmit"
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
import validate from "@/services/validation";

export default {
  name: "AddBook",
  components: { NavBar, Form },
  data() {
    return {
      placeholder: "Escreva aqui o título do livro",
      addOrEdit: "Enviar",

      onSubmit(id, form) {
        event.preventDefault();
        const { title, author, checked } = form;
        if (validate.validation(title, author)) {
          this.$emit("exitEditing");
          const body = {
            title,
            author,
            available: checked
          };
          return API.addBook(body)
            .then(alert("Livro Adicionado Á Lista"))
            .catch(error => alert(error));
        }
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
