<template>
  <div class="home">
    <NavBar />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'Home',
  components : {NavBar},
  data () {
    return {
      msg: 'Books List'
    }
  }
}
</script>
