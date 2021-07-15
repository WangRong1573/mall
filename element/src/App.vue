<template>
  <div id="app">
    <a href="/demo">点我显示</a>
    <router-view/>
<!--    <demo/>-->
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
