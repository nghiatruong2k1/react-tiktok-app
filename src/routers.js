import {
    HomePage,
    FollowingPage,
    ProfilePage
} from './components/pages';
import {
    
} from './components/layout';

export const publicRoutes = [
    {
        path:'/profile',page:ProfilePage
    },{
        path:'/following',page:FollowingPage
    },{
        path:'/*',page:HomePage
    }
];
export const privateRoutes = [];