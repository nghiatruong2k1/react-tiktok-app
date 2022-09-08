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

import {routersLogin} from "../../routers";
import { AuthContext } from '../../provider';
import { initCase} from '../../init';
function LoginComponent(props){
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
                <Divider size="sm" mt={5}/>
                <Group position="center" py={5}>
                    <Text>Bạn không có tài khoản?</Text>
                    <Anchor 
                        component="button" 
                        type="button"
                        color={"red.6"}
                        weight={"bold"}
                        onClick={()=>(dispath([initCase.SET_PATH,"register"]))}
                    >
                        Đăng ký
                    </Anchor>
                </Group>
        </Fragment>
    )
};export default memo(LoginComponent)