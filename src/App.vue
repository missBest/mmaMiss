<template>
  <main>
    <Navigation />
    <router-view :key="$route.path" />
    <Footer />
  </main>
</template>


<script>
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue'
export default {
  components: {
    Footer,
    Navigation
  }
}

</script>

<style scoped>
  div{
    color:blue;
    align-self:center;
    cursor:pointer;
  }
</style>