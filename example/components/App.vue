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
      this.$http.get('https://easy-mock.com/mock/5ad718dc7b068762cd35aeaf/api/test').then((response) => {
        console.log(response)
        this.response = JSON.stringify(response)
      }).catch((error) => {
        console.log(error)
      })

    },
  }
</script>

