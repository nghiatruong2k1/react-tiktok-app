import {memo} from 'react';
import {Anchor, Group} from "@mantine/core";
import {Link , useLocation }  from "react-router-dom";
const links = [
    [
        {
            path:"/",label:"Giới thiệu"
        },{
            path:"/",label:"TikTok Browse"
        },{
            path:"/",label:"Bảng tin"
        },{
            path:"/",label:"Liên hệ"
        }
    ],[
        {
            path:"/",label:"Quảng cáo"
        },{
            path:"/",label:"Developers"
        },{
            path:"/",label:"Transparency"
        },{
            path:"/",label:"TikTok Rewards"
        }
    ],[
        {
            path:"/",label:"Trợ giúp"
        },{
            path:"/",label:"An toàn"
        },{
            path:"/",label:"Điều khoản"
        },{
            path:"/",label:"Quyền riêng tư"
        },{
            path:"/",label:"Hướng dẫn"
        }
    ]
]

function MenuComponent(props){
    const location = useLocation();
    return (
        <Group spacing={10}>
            {
                links.map((group,index)=>(
                    <Group spacing={10} key={index} >
                        {
                            group.map(({path,label},index)=>{
                                return(
                                    <Anchor   
                                        key={index} 
                                        component={ Link } 
                                        to={path} 
                                        size="xs"
                                        color="dark"
                                    >
                                        {label}
                                    </Anchor>
                                )
                            })
                        }
                    </Group>
                ))
            }
        </Group>
    )
};export default memo(MenuComponent)