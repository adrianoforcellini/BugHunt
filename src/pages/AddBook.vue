<template>
  <div class="home">
    <NavBar />
    <Form :onSubmit="onSubmit" />
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
    onSubmit(form) {
      const { title, author, checked } = form;
      const body = {
        title,
        author,
        available: checked[0] === "available" ? true : false
      };
      API.addBook(body).then(alert("Livro Adicionado Á Lista")).catch(error=> alert(error));
    }
  }}
};
</script>
