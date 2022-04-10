<template>
  <div class="home">
    <NavBar />
    <b-form @submit="initEditing">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.id"
          placeholder="Escreva  o id do livro a editar e pressione enter."
          required
        ></b-form-input>
      </b-form-group>
    </b-form>
    <div v-if="haveId">
      <Form :onSubmit="onSubmit" :id='form.id'/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Form from "@/components/Form";

import API from "@/services/APIs";
export default {
  name: "EditBook",
  components: { NavBar, Form },
  methods: {
    initEditing() {
      this.haveId = true;
    }
  },
  data() {
    return {
      haveId: false,
      form: {
        id: ""
      },
      onSubmit(id, form) {
        const { title, author, checked } = form;
        const body = {
          title,
          author,
          available: checked[0] === "available" ? true : false
        };
        API.editBook(id, body)
          .then(alert("Livro Alterado Com Sucesso"))
          .catch(error => alert(error));
      }
    };
  }
};
</script>
