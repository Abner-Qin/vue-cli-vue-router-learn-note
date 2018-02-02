<template>
  <div class="hello">
    <h1>{{ msg }}--{{ $route.params.username}}--{{ $route.params.id}}</h1>
  </div>
</template>
<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi, I am Hi2!'
    }
  }
}
</script>
<style scoped>
</style>