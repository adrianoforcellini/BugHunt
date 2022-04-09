<template>
  <div class="home">
    <NavBar />
    <Form />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Form from "@/components/Form";

import API from "@/services/APIs";
export default {
  name: "AddBook",
  components: { NavBar, Form }
};
</script>
