<template>
  <div>
    <b-form-group v-slot="{ ariaDescribedby }">
      <b-form-radio
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="deleteOne"
        ><strong>Excluir Este Livro</strong></b-form-radio
      >
      <div class="radio-all">
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="deleteAll"
        >
          <strong>Excluir Todos os Livros</strong></b-form-radio
        >
      </div>
      <b-button variant="danger" @click="onSubmit(id),$emit('exitDeleting')" class="delete-button"
        >DELETAR</b-button
      >
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
          .then(({ data: { message } }) => alert(message))
          .catch(error => alert(error));
      }
      if (this.selected === "deleteAll") {
        return API.deleteAll()
          .then(({ data: { message } }) => alert(message))
          .catch(error => alert(error));
      }
    }
  }
};
</script>

<style scoped>

.delete-button {
  margin-top: 5vh;
}

.radio-all {
  margin-top: 2vh;
}

</style>
