<template>
  <div>
    <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Option A</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">Option B</b-form-radio>
    </b-form-group>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    name: "Form",
    data() {
      return {
        selected: ''
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

