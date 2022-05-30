import Vue from 'vue';
import App from './views/App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router';

Vue.use(ElementUI);
Vue.config.productionTip = false;

//1、导入qiankun所需方法
import {
    registerMicroApps,//注册子应用
    runAfterFirstMounted,//当第一个子应用装载完毕
    setDefaultMountApp,//设置默认装载的子应用
    initGlobalState,//微前端之间的通信
    start,//启动
} from "qiankun";

//渲染主应用
new Vue({
    router,
    render: h => h(App),
}).$mount('#container');
const IS_DEV = "development" === process.env.NODE_ENV;
const getActiveRule = hash => location => location.hash.startsWith(hash);

function getEntryWithProEnv(key, entryValue) {
    if (IS_DEV) {
        let path = entry[key].devUrl;
        path = path.replace('localhost', window.location.hostname);
        return path;
    }
    let path = window.location.origin + window.location.pathname.replace('/master', "/" + entry[key].dir);
    path = path.replace("/window.html", "/index.html");
    return path;
}

const entry = {
    // 第一个模块
    '/spa/firstApp': {
        // 生产环境目录
        dir: 'firstApp',
        // 开发环境本地url
        devUrl: 'http://localhost:7001'
    },
    // 第二个模块
    '/spa/secondApp': {
        // 生产环境目录
        dir: 'secondApp',
        // 开发环境本地url
        devUrl: 'http://localhost:7002'
    },
}
//注册子应用
registerMicroApps([
    {
        name: "firstApp",
        // entry: "//localhost:7001",
        entry: getEntryWithProEnv('/spa/firstApp'),
        container: "#micro-view",
        activeRule: getActiveRule('#/spa/firstApp'),
    },
    {
        name: "secondApp",
        entry: getEntryWithProEnv('/spa/secondApp'),
        container: "#micro-view",
        activeRule: getActiveRule('#/spa/secondApp'),
    }
], {
    beforeLoad: [
        app => {
            console.log("beforeLoad")
        }
    ],
    beforeMount: [
        app => {
            console.log("beforeMount")
        }
    ],
    beforeUnmount: [
        app => {
            console.log("beforeUnmount")
        }
    ],
    afterUnmount: [
        app => {
            console.log("afterUnmount")
        }
    ]
});
setDefaultMountApp("firstApp");
//第一个子应用加载完毕后回调
runAfterFirstMounted(() => {
    console.log("第一个子应用加载完毕后回调")
});
//启动qiankun
start({
    sandbox: true,
    prefetch: false
});