import { Divider, Navbar, ScrollArea, Stack } from '@mantine/core';
import clsx from 'clsx';
import {memo,Fragment} from 'react';
import DiscoverComponent from './Discover';
import LinksComponent from './Links';
import MenuComponent from './Menu';
import ProfileComponent from './Profile';
import RecommendAccountComponent from './RecommendAccount';
function LeftSidebarComponent(props){
    return (
        <Fragment>
            <Navbar className={"fullheight"}>
                <Navbar.Section grow className={"relative"}>
                    <ScrollArea className={clsx("absolute","inset-0")} type="hover">
                        <Stack spacing={5}  p={16}>
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
                </Navbar.Section>
            </Navbar>
        </Fragment>
    )
};export default memo(LeftSidebarComponent)