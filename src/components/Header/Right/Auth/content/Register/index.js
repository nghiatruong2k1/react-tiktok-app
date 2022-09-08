import {memo,Fragment,useContext} from 'react';
import {
    Button,
    Stack,
    ScrollArea,
    Divider,
    Group,
    Text,
    Anchor
} from "@mantine/core";

import {routersLogin} from "../../routers"
import { AuthContext } from '../../provider';
import { initCase} from '../../init';
function RegisterComponent(props){
    const {dispath} = useContext(AuthContext);
    return (
        <Fragment>
                <ScrollArea style={{overflow:"hidden auto"}}>
                    <Stack justify={"space-between"}>
                        {
                            routersLogin.map((route,index)=>(
                                <Button 
                                    key={index} 
                                    variant="outline"
                                    color={"dark"}
                                    leftIcon={<route.icon />} 
                                    styles={()=>({
                                        inner:{
                                            justifyContent:'flex-start'
                                        },label:{
                                            margin:"0 auto"
                                        }
                                    })}
                                >
                                    {route.text}
                                </Button>
                            ))
                        }
                    </Stack>
                </ScrollArea>
                <Text component='p' size={"0.8em"} my={10}>Bằng cách tiếp tục, bạn đồng ý với <Anchor>Điều khoản Sử dụng</Anchor> của TikTok và xác nhận rằng bạn đã đọc hiểu <Anchor>Chính sách Quyền riêng tư</Anchor> của TikTok.
                </Text>
                <Divider size="sm" mt={5}/>
                <Group position="center" py={5}>
                    <Text>Bạn đã có tài khoản?</Text>
                    <Anchor 
                        component="button" 
                        type="button"
                        color={"blue.6"}
                        weight={"bold"}
                        onClick={()=>(dispath([initCase.SET_PATH,"login"]))}
                    >
                        Đăng nhập
                    </Anchor>
                </Group>
        </Fragment>
    )
};export default memo(RegisterComponent)