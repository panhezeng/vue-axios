<template>
  <div id="app">
    <h1>VueAxios example</h1>
    <p>
      VueAxios response {{response}}
    </p>
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
      this.$http.get('http://private-87040-publicexample.apiary-mock.com/upload/token').then((response) => {
        console.log(response)
        this.response = JSON.stringify(response)
      }).catch((error) => {
        console.log(error)
      })

    },
  }
</script>

