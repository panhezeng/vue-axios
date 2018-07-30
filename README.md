# vue-axios

[示例](https://panhezeng.github.io/vue-axios/)

## use

`npm i @panhezeng/vue-axios -S`

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
      this.$http.get('https://easy-mock.com/mock/5ad718dc7b068762cd35aeaf/api/test').then(function (response) {
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
   本组件使用的axios是latest版本，没有太复杂的东西，放心使用，如果有需求，可以fork修改。
   externals vue方式使用此插件和internal一样，都需要显式use安装，为了保持使用方式一致，如需要自动安装功能，fork去掉auto install in dist mode下面代码的注释后重新编译即可。

## 编译

``` bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build
```

