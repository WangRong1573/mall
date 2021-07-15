<template>
  <div>
    <h1>Container容器组件的使用</h1>

    <el-container>
      <el-header>
        <div>我是标题</div>
      </el-header>

      <!--容器的嵌套使用-->
      <el-container>
        <el-aside>
          <div>我是菜单栏</div>
        </el-aside>
        <el-main>
          <div>我是中心内容</div>
        </el-main>
      </el-container>
      <el-footer>
        <div>我是页脚</div>
      </el-footer>
    </el-container>

<!--    属性
                      参数	说明	类型	可选值	默认值
Container Attributes： direction	子元素的排列方向	string	horizontal / vertical	子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal
Header Attributes：width	侧边栏宽度	string	—	300px
Footer Attributes：height	底栏高度	string	—	60px


-->
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
