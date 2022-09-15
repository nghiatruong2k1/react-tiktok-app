import { HomePage, FollowPage, ProfilePage, LivePage } from '~/components/pages';
import {} from '~/components/layout';

export const publicRoutes = [
    {
        path: '/profile',
        page: ProfilePage,
    },
    {
        path: '/follow',
        page: FollowPage,
    },
    {
        path: '/live',
        page: LivePage,
    },
    {
        path: '/*',
        page: HomePage,
    },
];
export const privateRoutes = [];
