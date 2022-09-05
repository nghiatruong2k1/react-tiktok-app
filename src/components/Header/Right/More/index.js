import {memo,Fragment} from 'react';
import clsx from 'clsx';
import {ActionIcon,Menu} from "@mantine/core";
import {
    IconDotsVertical,
    IconLanguage,
    IconHelp,
    IconKeyboard
} from "@tabler/icons";
function MoreComponent(props){
    return (
    <Menu withArrow>
        <Menu.Target>
            <ActionIcon variant="outline" size="lg">
                <IconDotsVertical /> 
            </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Item icon={<IconLanguage/>}>Tiếng Việt</Menu.Item>
            <Menu.Item icon={<IconHelp/>}>Phản hồi và trợ giúp</Menu.Item>
            <Menu.Item icon={<IconKeyboard/>}>Phím tắt</Menu.Item>
        </Menu.Dropdown>
    </Menu>
    )
};export default memo(MoreComponent)