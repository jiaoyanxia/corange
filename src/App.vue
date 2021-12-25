<template>
  <div>
    <!-- <Layout/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from './views/layout/layout.vue';
export default {
  name: "app",
  components:{
    Layout
  }
  
};
</script>

<style lang='less'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-right: 10px;
  a {
    margin-right: 10px;
  }
}
</style>
