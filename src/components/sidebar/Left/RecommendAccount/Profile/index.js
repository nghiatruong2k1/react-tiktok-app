import {memo,Fragment} from 'react';
import {Avatar, Button, Group, Indicator, NavLink,  Popover,  Stack,  Text}from "@mantine/core";
import { Link ,useLocation } from 'react-router-dom';
import { IconCheck } from '@tabler/icons';
import { useHover } from '@mantine/hooks';
function ProfileComponent({name,description,avatar,id}){
    const location = useLocation();
    const { hovered, ref } = useHover();
    return (
    <div className={"fullwidth"} ref={ref}>
        <Popover withArrow shadow={"md"} width="target" opened={hovered}>
            <Popover.Target>
                <NavLink   
                    component={ Link } 
                    to={id} 
                    label={(
                        <Indicator 
                            position="middle-end" 
                            size={"1em"} 
                            offset={-10}
                            color="cyan"
                            styles={{indicator:{padding:0}}} 
                            inline 
                            label={<IconCheck size={"0.8em"} />}
                            zIndex={0}
                        >
                            <Text>{name}</Text>
                        </Indicator>
                    )} 
                    description={description}
                    icon={<Avatar src={avatar}/>}
                    variant="subtle"
                    color="red"
                    active={location.pathname === id}
                    style={{fontWeight:"bold"}}
                />
            </Popover.Target>
            <Popover.Dropdown>
                <Stack>
                    <Group position="apart">
                        <Avatar src={avatar}/>
                        <Button color={"red"}>Follow</Button>
                    </Group>
                    <Text weight="bold">{name}</Text>
                    <Text>{description}</Text>
                    <Group noWrap={false}>
                        <Text lineClamp={1}><b>2.6M</b> Follower</Text>
                        <Text lineClamp={1}><b>2.6M</b> Thích</Text>
                    </Group>
                </Stack>
            </Popover.Dropdown>
        </Popover>
    </div>
    )
};
export default memo(ProfileComponent)