<template>
  <div>
    <b-form-group  v-slot="{ ariaDescribedby }" >
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="deleteOne">Excluir Este Livro</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="deleteAll">Excluir Todos os Livros</b-form-radio>
      <b-button  variant="danger" @click="onSubmit(id)">DELETAR</b-button>
    </b-form-group>

  </div>
</template>

<script>
import API from "@/services/APIs";
  export default {
    name: "Form",
    data() {
      return {
        selected: ''
      }
    },  props : {
      id: String,
  },
    methods: {
        onSubmit(id){
            if (this.selected === ""){
               return alert("Selecione Uma Forma De Exclusão")

            }  if (this.selected === "deleteOne"){
               return API.deleteBook(id).then(({data})=>alert(data.message)).catch(error=>alert(error))

            }  if (this.selected === "deleteAll"){
               return  API.deleteAll().then(({data})=>alert(data.message)).catch(error=>alert(error))
            }

        }
    }
  }
// import NavBar from "@/components/NavBar";
// import API from "@/services/APIs";
// export default {
//   name: "DeleteForm",
//   data() {
//     return {
//       form: {
//         title: "",
//         author: "",
//         checked: []
//       },
//       show: true
//     };
//   },
//   props : {
//       onSubmit: Function,
//       id: String,
//       placeholder: String
//   },
//   methods: {
//     onReset(event) {
//       event.preventDefault();
//       this.form.title = "";
//       this.form.author = "";
//       this.form.checked = [];
//       // Trick to reset/clear native browser form validation state
//       this.show = false;
//       this.$nextTick(() => {
//         this.show = true;
//       });
//     }
//   }
// };
// </script>
</script>

