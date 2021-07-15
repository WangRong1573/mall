<template>
  <div>
    <h2>Layout布局组件</h2>
    <!--    有两个属性 row ：行和col：列-->
    <!--    基本使用（页面被分成24栅格）-->
    <el-row>
      <el-col :span="12">
        <div style="border: 1px lightcoral solid">表示占了12份</div>
      </el-col>
      <el-col :span="6">
        <div style="border: 1px red solid">表示占了6份</div>
      </el-col>
      <!--      如果一行的份数超过了24份，则会到下一行-->
    </el-row>

    <!--    gutter 栅格间隔-->
    <el-row :gutter="20">
      <el-col :span="12">
        <div style="border: 1px lightcoral solid">表示占了12份</div>
      </el-col>
      <el-col :span="6">
        <div style="border: 1px red solid">表示占了6份</div>
      </el-col>
    </el-row>

    <!--    offset	栅格左侧的间隔格数 偏移量-->
    <el-row>
      <el-col :span="12" :offset="4">
        <div style="border: 1px lightcoral solid">表示占了12份</div>
      </el-col>
      <el-col :span="6">
        <div style="border: 1px red solid">表示占了6份</div>
      </el-col>
      <el-col :span="2">
        <div style="border: 1px red solid">表示占了2份</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped>

</style>
