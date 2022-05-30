import {registerMicroApps, start} from 'qiankun';

const getActiveRule = hash => location => location.hash.startsWith(hash);
registerMicroApps([
    {
        name: 'qiankun micro package1', // app name registered
        entry: '//localhost:7001',
        container: '#container',
        activeRule: getActiveRule('#/spa/qiankun-micro-package1'),
    },
    {
        name: 'qiankun micro package2',
        entry: '//localhost:7002',
        container: '#container',
        activeRule: getActiveRule('#/spa/qiankun-micro-package2'),
    },
]);
// start();