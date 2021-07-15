<template>
  <div>
    <h3>button组件的使用学习</h3>
    <!--  按钮组件的声明-->
    <el-button>我是一个按钮</el-button>

    <!--    控制按钮样式
      plain 相当于 plain = 'true'，只要显示的声明出来就相当于声明为true
    -->
    <el-button plain type="success">朴素按钮</el-button>

    <el-button type="primary" icon="el-icon-loading" circle></el-button>

    <!--    按钮组的使用-->
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>

  </div>
</template>

<script>
export default {
  name: "ButtonDetail"
}
</script>

<style scoped>

</style>
