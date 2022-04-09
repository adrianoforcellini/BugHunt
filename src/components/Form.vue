<template>
  <div class="home">
    <b-form @submit="onSubmit(form)" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Título" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          placeholder="Escreva aqui o título do livro."
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Autor:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.author"
          placeholder="Escreva aqui o nome do autor do livro."
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
        >
          <b-form-checkbox value="available">Livro Disponível</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="danger">Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import API from "@/services/APIs";
export default {
  name: "Form",
  data() {
    return {
      form: {
        title: "",
        author: "",
        checked: []
      },
      show: true
    };
  },
  props : {
      onSubmit: Function
  },
  methods: {
    onReset(event) {
      event.preventDefault();
      this.form.title = "";
      this.form.author = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
