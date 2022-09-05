import {
    HomePage,
    FollowingPage,
    ProfilePage
} from '../components/@pages';
import {
    
} from '../components/@layout';

export const publicRoutes = [{
    path:'/',page:HomePage
},{
    path:'/following',page:FollowingPage
},{
    path:'/profile',page:ProfilePage
}];
export const privateRoutes = [];