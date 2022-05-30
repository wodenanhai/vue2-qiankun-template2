import Home from './../components/Home'
import About from './../components/About'

const routes = [
    {
        path: '/',
        redirect: "/qiankun-micro-package1"
    },
    {
        path: '/qiankun-micro-package1',
        name: 'qiankun-micro-package1',
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
    },

];

export default routes;