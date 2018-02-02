<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
    </div>
</template>
 
<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'params page'
    }
  },
  //写在模板中就可以有两个钩子函数可以使用
  //在路由进入前的钩子函数
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  //在路由离开前的钩子函数
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
</script>