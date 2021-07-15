import Vue from 'vue'
import Router from 'vue-router'
import Demo from "../components/Demo";
import ButtonDetail from "../components/ButtonDetail";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      component: Demo
    },
    {
      path:"/buttonDetail",
      component:ButtonDetail
    }
  ],
  mode:'history'
})
