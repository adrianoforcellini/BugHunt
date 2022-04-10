<template>
  <div>
    <b-form-group v-slot="{ ariaDescribedby }">
      <b-form-radio
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="deleteOne"
        >Excluir Este Livro</b-form-radio
      >
      <b-form-radio
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="deleteAll"
        >Excluir Todos os Livros</b-form-radio
      >
      <b-button variant="danger" @click="onSubmit(id)">DELETAR</b-button>
    </b-form-group>
  </div>
</template>

<script>
import API from "@/services/APIs";
export default {
  name: "Form",
  data() {
    return {
      selected: ""
    };
  },
  props: {
    id: String
  },
  methods: {
    onSubmit(id) {
      if (this.selected === "") {
        return alert("Selecione Uma Forma De Exclusão");
      }
      if (this.selected === "deleteOne") {
        return API.deleteBook(id)
          .then(({ data : {message} }) => alert(message))
          .catch(error => alert(error));
      }
      if (this.selected === "deleteAll") {
        return API.deleteAll()
          .then(({ data : {message} }) => alert(message))
          .catch(error => alert(error));
      }
    }
  }
};
</script>
