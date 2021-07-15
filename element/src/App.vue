<template>
  <div id="app">
    <a href="/demo">点我显示</a>
    <a href="/buttonDetail">跳转到button组件学习页面</a>
    <a href="/link">文字链接页面</a>
    <a href="/layout">layout布局组件</a>
    <a href="/container">Container容器组件的使用</a>
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
