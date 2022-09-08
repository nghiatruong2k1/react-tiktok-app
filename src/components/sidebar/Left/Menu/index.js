import {memo} from 'react';
import {Group, NavLink} from "@mantine/core";
import {Link , useLocation }  from "react-router-dom";
import { IconHeart, IconHome, IconVideo } from '@tabler/icons';
const links = [
    {
        path:"/",label:"Trang chủ",icon:IconHome
    },{
        path:"/follow",label:"Đang theo dỏi",icon:IconHeart
    },{
        path:"/live",label:"LIVE",icon:IconVideo
    }
]
function MenuComponent(props){
    const location = useLocation();
    return (
        <Group spacing={2}>
            {
                links.map(({path,label,icon},index)=>{
                    const Icon = icon;
                    return(
                        <NavLink   
                            key={index} 
                            component={ Link } 
                            to={path} 
                            label={label} 
                            icon={<Icon />}
                            variant="subtle"
                            color="red"
                            active={location.pathname === path}
                            style={{fontWeight:"bold"}}
                        />
                    )
                })
            }
        </Group>
    )
};export default memo(MenuComponent)