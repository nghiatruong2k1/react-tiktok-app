import {memo,Fragment} from 'react';
import clsx from 'clsx';
import {Button,Modal,Title} from "@mantine/core";
import {IconLogin} from "@tabler/icons";
function LoginButtonComponent(props){
    return (
        <Fragment>
            <Button variant="filled" leftIcon={<IconLogin />} size="lg" compact>
                Đăng nhập
            </Button>
            <Modal
                centered
                opened={true}
                title={<Title order={1}>Đăng nhập vào Tiktok</Title>}
            >

            </Modal>
        </Fragment>
    )
};export default memo(LoginButtonComponent)