import { List, ListItem, Stack } from '@mui/material';
import { memo } from 'react';
import ScrollArea from '~/components/ScrollArea';
import DiscoverComponent from './Discover';
import LinksComponent from './Links';
import MenuComponent from './Menu';
import ProfileComponent from './Profile';
import RecommendAccountComponent from './RecommendAccount';
const sibarItems = [
    MenuComponent,
    ProfileComponent,
    RecommendAccountComponent,
    DiscoverComponent,
    LinksComponent,
];
function LeftSidebarComponent(props) {
    return (
        <ScrollArea className={'fullview'} type="hover">
            <Stack component={List} gap={1}>
                {sibarItems.map((Item, index) => (
                    <ListItem key={index}  p={1} divider>
                        <Item />
                    </ListItem>
                ))}
            </Stack>
        </ScrollArea>
    );
}
export default memo(LeftSidebarComponent);
