import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // 触发renderAfterDocumentEvent
    document.dispatchEvent(new Event("render-event"));
  }
}).$mount("#app");