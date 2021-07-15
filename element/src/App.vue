<template>
  <div id="app">
    <a href="/demo">点我显示</a>
    <a href="/buttonDetail">跳转到button组件学习页面</a>
    <router-view/>
  </div>
</template>

<script>
import Demo from "./components/Demo";

export default {
  name: 'App',
  components:{
    Demo
  }
}
</script>

<style>

</style>
