<template>
  <div class="home">
    <b-form
      @submit="onSubmit(id, form)"
      @reset="clearInputs"
      v-if="show"
    >
      <b-form-group id="input-group-1" label="Título" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          :placeholder="placeholder"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Autor:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.author"
          placeholder="Escreva aqui o nome do autor do livro."
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-checkbox-group v-model="form.checked">
          <b-form-checkbox>Livro Disponível</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">{{ addOrEdit }}</b-button>
      <b-button type="reset" variant="danger">Recomeçar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      form: {
        title: "",
        author: "",
        checked: true
      },
      show: true
    };
  },
  props: {
    onSubmit: Function,
    id: String,
    placeholder: String,
    addOrEdit: String
  },
  methods: {
    clearInputs(event) {
      event.preventDefault()
      this.form.title = "";
      this.form.author = "";
      this.form.checked = true;
    },
  }
};
</script>
