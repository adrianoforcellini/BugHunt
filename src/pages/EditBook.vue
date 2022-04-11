<template>
  <div class="edit-book-page">
    <NavBar />
    <div class="edit-page-bk">
      <div class="form-spacement"></div>
      <div class="id-form-container" v-if="isStarting">
        <b-form @submit="initEditing" class="id-form">
          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.id"
              placeholder="Escreva  o id do livro a editar e pressione enter."
            ></b-form-input>
          </b-form-group>
        </b-form>
      </div>
      <div v-if="isEditing" class="form-container">
        <Form
          :onClick="onClick"
          :id="form.id"
          :placeholder="placeholder"
          :addOrEdit="addOrEdit"
        />
        <b-button variant="danger" @click="initDeleting" class="delete-button"
          >DELETAR</b-button
        >
      </div>
      <div v-if="isDeleting" class="delete-container">
        <DeleteForm :id="form.id" v-on:exitDeleting="exitDeleting" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Form from "@/components/Form";
import DeleteForm from "@/components/DeleteForm";
import API from "@/services/APIs";

export default {
  name: "EditBook",
  components: { NavBar, Form, DeleteForm },
  methods: {
    initEditing() {
      this.isEditing = true;
      this.isStarting = false;
    },
    initDeleting() {
      this.isEditing = false;
      this.isDeleting = true;
    },
    exitDeleting() {
      this.form.id="";
      this.isStarting = true;
      this.isDeleting = false;
    }
  },
  data() {
    return {
      isEditing: false,
      isDeleting: false,
      isStarting: true,
      addOrEdit: "Editar",
      form: {
        id: ""
      },
      placeholder:
        "Para alterar apenas a disponibilidade, mantenha os inputs em branco e utilize apenas o checkbox.",

      onClick(id, form) {
        const { title, author, checked } = form;
        const body = {
          title,
          author,
          available: checked
        };
        if (body.title.length === 0) {
          return API.editAvailable(id, { available: body.available })
            .then(({ data: { message } }) => alert(message))
            .catch(error => alert(error));
        }
        return API.editBook(id, body)
          .then(({ data: { message } }) => alert(message))
          .catch(error => alert(error));
      }
    };
  }
};
</script>

<style scoped>
.delete-button {
  margin-top: 1vh;
}

.delete-container {
  background-color: whitesmoke;
  margin-left: 40vw;
  padding: 2vw;
  width: 20vw;
}

.edit-page-bk {
  background-image: url("../assets/edit-book.jpg");
  height: 100vh;
  opacity: 0.8;
  width: 100vw;
}

.form-container {
  background-color: whitesmoke;
  margin-left: 20vw;
  padding: 2vw;
  width: 60vw;
}

.form-spacement {
  height: 15vh;
  width: 100vw;
}

.id-form-container {
  background-color: whitesmoke;
  margin-left: 20vw;
  padding: 2vw;
  width: 60vw;
}
</style>
