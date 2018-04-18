<template>
  <div id="app">
    VueAxios response {{response}}
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        response: '',
      }
    },
    created () {
      this.$http.get('http://doclever.cn:8090/mock/5ad45bfb13ff0747241abf7d/test').then((response) => {
        console.log(response)
        this.response = JSON.stringify(response)
      }).catch((error) => {
        console.log(error)
      })

    },
  }
</script>

