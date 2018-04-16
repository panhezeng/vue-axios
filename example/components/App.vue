<template>
  <div id="app">
    VueAxios
  </div>
</template>

<script>
  export default {
    name: 'App',
    created () {
      this.$http.get('http://doclever.cn:8090/mock/5ad45bfb13ff0747241abf7d/test').then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })

    },
  }
</script>

