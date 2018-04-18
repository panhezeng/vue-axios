# vue-axios

[示例](https://panhezeng.github.io/vue-axios/)

## use

```javascript
import VueAxios from '@panhezeng/vue-axios'

Vue.use(VueAxios)

console.log(Vue.http)
console.log(Vue.axios)
```

```vue
<script>
  export default {
    name: 'App',
    created () {
      this.$http.get('http://doclever.cn:8090/mock/5ad45bfb13ff0747241abf7d/test').then(function (response) {
             console.log(response)
           }).catch(function (error) {
             console.log(error)
           })
      console.log(this.$axios)     
    },
  }
</script>
```



## 说明

   就是为了方便使用vue-resource的老用户，和vue-resource一样，把axios类挂载到了http属性名上，同时创建axios属性，和http属性引用地址一样。

## 编译

``` bash
# install dependencies
npm install

# 运行插件使用示例
npm run example

# 编译插件
npm run build
```

