<template>
  <div id="app">

    <!-- 路径 -->
    <router-link to="/layout/home">home</router-link>
    <router-link to="/layout/chat">chat</router-link>
    <router-link to="/layout/rank">rank</router-link>
    <router-link to="/layout/info">info</router-link>
    <router-link to="/layout/about">about</router-link>


    <!-- 视图 -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
};
</script>

<style lang="less">
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
