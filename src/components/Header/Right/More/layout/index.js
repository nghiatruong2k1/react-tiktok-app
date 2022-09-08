import {memo, useContext} from 'react';
import { ActionIcon, Divider, Group, Navbar, ScrollArea, Text } from '@mantine/core';
import { IconArrowBigLeftLines} from '@tabler/icons';
import { MoreContext } from '../provider';
import { initCase } from '../init';
function MoreLayoutComponent({children,title,path,footer}){
    const {dispath} = useContext(MoreContext);
    return (
    <>
        <Navbar styles={{
            root:{borderRight:'0'}
        }}>
                {
                    title && (
                        <Navbar.Section>
                            <Group>
                                {
                                    (path !== 'default') && (
                                        <ActionIcon onClick={()=>{dispath([initCase.BACK])}}>
                                            <IconArrowBigLeftLines />
                                        </ActionIcon>
                                    )
                                }
                                <Text weight="bold">
                                    {title}
                                </Text>
                            </Group>
                            <Divider /> 
                        </Navbar.Section>
                    )
                }
                <Navbar.Section grow>
                    <ScrollArea>
                        {children}
                    </ScrollArea>
                </Navbar.Section>
                {
                    footer && (
                        <Navbar.Section>{footer}</Navbar.Section>
                    )
                }
        </Navbar>
    </>
    )
};
export default memo(MoreLayoutComponent)