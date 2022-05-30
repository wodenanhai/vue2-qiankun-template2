export default [
    {
        path: "/",
        component: () => import("../views/App"),
        // redirect: "index"
    },
    {
        name: "spa",
        path: "/spa/*",
        component: () => import("../views/App"),
        meta: {
            //SPA应用标志位
            isSpa: true
        }
    }
]