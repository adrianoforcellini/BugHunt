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
      <Form :onSubmit="onSubmit" :id="form.id" :placeholder="placeholder" />
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
      placeholder:
        "Para alterar apenas a disponibilidade, mantenha os inputs em branco e utilize apenas o checkbox. Não sendo este o caso, escreva aqui o título do livro",

      onSubmit(id, form) {
        const { title, author, checked } = form;
        const body = {
          title,
          author,
          available: checked[0] === "available" ? true : false
        };
        if (body.title.length === 0) {
          return API.editAvailable(id, { available: body.available })
            .then(({data}) => alert(data.message))
            .catch(error => alert(error));
        }
        return API.editBook(id, body)
          .then(({data}) => alert(data.message))
          .catch(error => alert(error));
      }
    };
  }
};
</script>
