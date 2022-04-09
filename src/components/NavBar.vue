 <template>
 <div> 
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
            <img src="@/assets/logo.png" width="40%">
        <b-nav-item to="bookslist">Listar Livros</b-nav-item>
        <b-nav-item to="createbook">Adicionar Livros</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>

export default {
  name: 'NavBar',
}
</script>