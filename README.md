# vue-axios

## 示例

[点击预览](https://panhezeng.github.io/vue-axios/)

示例代码目录 /example

示例使用的 apiary mock 服务每次 Request 获得的 Response 都是不变的。免费服务可能会出现无响应等错误

## 说明

方便使用 vue-resource 的老用户，和 vue-resource 一样，把 axios 类挂载到了 http 属性名上，同时创建 axios 属性，和 http 属性引用地址一样。
本组件使用的 axios 是 latest 版本，没有太复杂的东西，放心使用，如果有需求，可以 fork 修改。
修改了 output 方式，通过 require 或 window 方式使用，不需要加.default

## 用法

### internal vue 方式

`npm i vue @panhezeng/vue-axios -S`

```javascript
import Vue from "vue";
import VueAxios from "@panhezeng/vue-axios";
Vue.use(VueAxios); ̰
```

### external vue 方式

```html
<script src="https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js"></script>
```

`npm i @panhezeng/vue-axios -S`

```javascript
// auto install
import "@panhezeng/vue-axios";
```

or

```html
<!--auto install-->
<script src="https://cdn.jsdelivr.net/npm/axios@latest/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@panhezeng/vue-axios@latest/dist/vue-axios.min.js"></script>
```

```javascript
console.log(Vue.http);
console.log(Vue.axios);
```

```vue
<script>
export default {
  name: "App",
  created() {
    this.$http
      .get("https://easy-mock.com/mock/5ad718dc7b068762cd35aeaf/api/test")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.$axios);
  }
};
</script>
```

## 编译

```bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build

# 发版
npm set registry https://registry.npmjs.org/ && npm set @panhezeng:registry https://registry.npmjs.org/ && npm version patch && npm publish --access public && npm set registry https://registry.npm.taobao.org/ && npm set @panhezeng:registry https://registry.npm.taobao.org/

```
