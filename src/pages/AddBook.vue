<template>
  <div class="home">
    <NavBar />
    <Form :onSubmit="onSubmit" :placeholder="placeholder" />
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
      onSubmit(id, form) {
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
          available: checked[0] === "available" ? true : false
        };
        API.addBook(body)
          .then(alert("Livro Adicionado Á Lista"))
          .catch(error => alert(error));
      }
    };
  }
};
</script>
