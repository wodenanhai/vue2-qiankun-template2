import Home from './../components/Home'
import About from './../components/About'

const routes = [
    {
        path: '/',
        redirect: "/qiankun-micro-package2"
    },
    {
        path: '/qiankun-micro-package2',
        name: 'qiankun-micro-package2',
        component: () => import('../views/index'),
        // children: [
        //     {
        //         path: '/',
        //         name: 'home',
        //         component: Home,
        //     },
        //     {
        //         path: '/about',
        //         name: 'about',
        //         component: About,
        //     }
        // ]
    }
];

export default routes;