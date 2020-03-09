<template>
  <div id="app">
    <div id="nav">
      <div style="flex:1">
        <router-link to="/">Home</router-link>|
        <router-link to="/gl">GlView</router-link>
      </div>
      <AddButton>添加数据</AddButton>
    </div>
    <router-view />
  </div>
</template>
<script>
import AddButton from './components/AddButton'
export default {
  components: {
    AddButton
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#nav {
  padding: 10px 30px;
  display: flex;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
