import {memo} from 'react';
import {Link , useLocation }  from "react-router-dom";
import { IconHeart, IconHome, IconVideo } from '@tabler/icons';
import { List,ListItem, ListItemIcon, ListItemText } from '@mui/material';
import clsx from 'clsx';
import styles from "./styles.module.css";
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
        <List disablePadding>
            {
                links.map(({path,label,icon},index)=>{
                    const Icon = icon;
                    return(
                        <ListItem
                            disablePadding   
                            key={index} 
                            component={ Link } 
                            to={path} 
                            className={ clsx(styles.link,{
                                [styles.active]:(location.pathname === path)
                            })}
                        >
                            <ListItemIcon className={styles.icon}>{<Icon />}</ListItemIcon>
                            <ListItemText classes={{primary:styles.text}}>{label}</ListItemText>
                        </ListItem>
                    )
                })
            }
        </List>
    )
};export default memo(MenuComponent)