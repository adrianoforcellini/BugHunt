<template>
  <div>
    <NavBar />
    <div class="home-page">
      <div class="span-container">
        <span>
          Seja bem vindo ao site da
          <img src="@/assets/logo.png" />
          , powered by
          <div class="bug-hunt-logo-container">
          <img src="@/assets/bug-hunt-logo.png" alt="Bug Hunt Logo" />
            </div>  
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "Home",
  components: { NavBar },
  data() {
    return {
      msg: "Home Page"
    };
  }
};
</script>
<style scoped>


.bug-hunt-logo-container{
  border-radius: 70%;
  background-color: black;
  height: 10vh;
  width: 15vw;
  margin-left: 13vw;
}

.bug-hunt-logo-container img{
  width: 10vw;
  margin-top: 1vw;
}

.home-page {
  display: flex;
  background-image: url("../assets/home-bk.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

.span-container {
  display: flex;
  /* background-color:red; */
  color: white;
  font-size: 2vw;
  width: 40vw;
  height: 40vh;
  margin-left: 10vw;
  margin-top: 10vw;
}
</style>
