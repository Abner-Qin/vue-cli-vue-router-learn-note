<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <transition name="fade" mode="out-in">
  <router-view class="aaa"></router-view>
</transition>
  </div>
</template>
 
<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi, I am JSPang'
    }
  }
}
</script>
 
 
<style scoped>
 
</style>