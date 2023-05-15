<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <nav-bar></nav-bar>

  <div style="height:86px"></div>

</template>
<script>
import NavBar from "@/views/layout/NavBar.vue";
export default {
  components:{NavBar},
  
}
</script>

<style lang="scss">

</style>
