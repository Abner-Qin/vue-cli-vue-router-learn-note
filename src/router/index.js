import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1' 
import Hi2 from '@/components/Hi2' 
import a1 from '@/components/a1' 
import a2 from '@/components/a2' 
import Params from '@/components/Params' 
import Error from '@/components/Error' 
Vue.use(Router)

export default new Router({
	// mode:'history',
	mode:'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components:{
      	default:HelloWorld,
      	left:a1,
      	right:a2,
      } 
    },
    {
      path: '/Hi',
      components: {
        default:Hi,
        left:a2,
        right:a1
      }
    },
    {
  path:'/hi',
  name:'Hi',
  component:Hi,
  children:[
 		{path:'/',name:'HelloWorld/Hi',component:Hi},
        {path:'hi1',name:'hi1',component:Hi1},
        {path:'hi2',name:'hi2',component:Hi2},
]
},{
    path:'/params/:newsId(\\d+)/:newsTitle',
     component:Params,
     // 钩子函数（在路由配置文件中只能写beforeEnter）
     beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        // 停止跳转相当于拦截
        // next(false)
        // 正常执行
        // next(true)  next()
        // 跳转到制定路径，例子为跳转到根目录
        // next({path:'/'})
       next();
}
},{
      path:'/goback',
      redirect:'/'
    },{
  path:'/goParams/:newsId(\\d+)/:newsTitle',
  redirect:'/params/:newsId(\\d+)/:newsTitle'
},{
    path: '/a1',
    component: a1,
    alias:'/jspang'
 },
{
   path:'*',
   component:Error
}
  ]
})
