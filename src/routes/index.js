import { HeaderOnly } from '~/layouts';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import UpLoad from '~/Pages/UpLoad';
import Search from '~/Pages/Search';
import Live from '~/Pages/Live';
import routesConfig from '~/config/routes';
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: '/:nickname',
        component: Profile,
    },
    {
        path: routesConfig.upLoad,
        component: UpLoad,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: null,
    },
    {
        path: routesConfig.live,
        component: Live,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
