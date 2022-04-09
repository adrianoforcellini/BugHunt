<template>
  <div class="nav-bar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <div class="nav-bar-items-container">
            <b-nav-item to="" class="img-container">
              <img src="@/assets/logo.png" width="100%" @click="onClick" />
            </b-nav-item>
            <div class="nav-links-container">
              <b-nav-item to="bookslist">Listar Livros</b-nav-item>
              <div class="items">
                <b-nav-item to="addbook">Adicionar Livros</b-nav-item>
              </div>
              <div class="items">
                <b-nav-item to="editbook">Editar/Excluir Livros</b-nav-item>
              </div>
            </div>
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
.img-container {
  width: 15%;
}
.nav-bar {
  font-size: 1.5vw;
  justify-content: center;
}
.nav-bar-items-container{
  display: flex;
  justify-content: space-around;
}
.nav-links-container {
  display: flex;
  margin-left: 5vw;
}
.items {
  margin-left: 5vw;
}
</style>
