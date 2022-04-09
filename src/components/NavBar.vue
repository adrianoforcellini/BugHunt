<template>
  <div class="nav-bar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <img src="@/assets/logo.png" width="30%" />
          <div class="nav-itens">
            <b-nav-item to="bookslist">Listar Livros</b-nav-item>
            <b-nav-item to="addbook">Adicionar Livros</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
<style scoped>
.nav-bar {
  font-size: 1.8vw;
  justify-content: center;
}
.nav-itens {
  display: flex;
  margin-left: 5vw;
}
</style>
