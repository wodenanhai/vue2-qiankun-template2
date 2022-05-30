export default [
    {
        path: "/",
        component: () => import("../views/home/qiankun-home-layout"),
        // redirect: "index"
    },
    {
        name: "spa",
        path: "/spa/*",
        component: () => import("../views/home/qiankun-home-layout"),
        meta: {
            //SPA应用标志位
            isSpa: true
        }
    }
]