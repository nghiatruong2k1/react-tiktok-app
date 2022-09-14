
import { Divider, Stack } from '@mui/material';
import {memo,Fragment} from 'react';
import ScrollArea from '~/components/ScrollArea';
import DiscoverComponent from './Discover';
import LinksComponent from './Links';
import MenuComponent from './Menu';
import ProfileComponent from './Profile';
import RecommendAccountComponent from './RecommendAccount';
function LeftSidebarComponent(props){
    return (
        <ScrollArea className={'fullview'} type="hover">
            <Stack spacing={1} p={1}>
                <MenuComponent />
                <Divider/>
                <ProfileComponent />
                <Divider/>
                <RecommendAccountComponent />
                <Divider/>
                <DiscoverComponent />
                <Divider/>
                <LinksComponent />
                <Divider/>
            </Stack>
        </ScrollArea>
    )
};export default memo(LeftSidebarComponent)