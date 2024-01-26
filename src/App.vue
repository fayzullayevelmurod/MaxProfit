<template>
  <div id="app" class="wrapper">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>


<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>