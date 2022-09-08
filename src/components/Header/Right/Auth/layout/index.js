import {memo,Fragment,useEffect} from 'react';
import {
    Modal,
    Title,
    Button 
} from '@mantine/core';
import {IconLogin} from "@tabler/icons";
import { SetTitle } from '../../../../../config/SetTitle';
function AuthLayoutComponent({title,children}){
    useEffect(() => {
        SetTitle(title)
    }, [title]);
    return (
        <Fragment>
            <Button 
                variant="filled" 
                color="red.6"
                leftIcon={<IconLogin />} 
                size="lg" compact
            >
                Đăng nhập
            </Button>
            <Modal
                centered
                opened={false}
                overflow="inside"
                padding="xl"
                title={<Title order={3}>{title}</Title>}
                styles={()=>({
                    body:{
                        overflow:'hidden',
                        display:'flex',
                        flexDirection:'column'
                    }
                })}
            >
                {children}
            </Modal>
        </Fragment>
    )
};export default memo(AuthLayoutComponent)