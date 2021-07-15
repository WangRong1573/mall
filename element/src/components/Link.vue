<template>
 <div>
   <h4>文字链接组件使用</h4>

   <el-link>默认创建</el-link>
   <el-link type="success" href="www.baidu.com">成功链接</el-link>
   <el-link type="warning">警告链接</el-link>

   //underline 需要使用绑定属性方式使用
   <el-link :underline="false">不显示下划线</el-link>

   <el-link disabled>不可点击</el-link>

   <el-link type="success" href="www.baidu.com" target="_blank">成功链接</el-link>

   <el-link icon="el-icon-view el-icon--right">添加logo</el-link>
 </div>

</template>

<script>
export default {
  name: "Link"
}
</script>

<style scoped>

</style>
