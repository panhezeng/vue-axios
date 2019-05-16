import axios from "axios";

let Vue;

function install(_Vue) {
  if (Vue) {
    console.warn(
      "[VueAxios] already installed. Vue.use(VueAxios) should be called only once."
    );
    return;
  }

  Vue = _Vue;

  Object.defineProperties(Vue.prototype, {
    $http: {
      get: function() {
        return axios;
      }
    },
    $axios: {
      get: function() {
        return axios;
      }
    }
  });

  // Vue添加全局属性
  Vue.http = axios;
  Vue.axios = axios;
}

// auto install in dist mode
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export const VueAxios = {
  install: install
};
