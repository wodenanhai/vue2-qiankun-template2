import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App.vue';
import routes from "./router";
import "./public-path";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(props = {}) {
    const {container} = props;
    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? '/qiankun-micro-package1/' : '/',
        mode: 'history',
        routes,
    });
    instance = new Vue({
        router,
        render: h => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}

// 本地调试
if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

// 生命周期 - 挂载前
export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}

// 生命周期 - 挂载后
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}

// 生命周期 - 解除挂载
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
    router = null;
}

