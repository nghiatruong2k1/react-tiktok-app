import { NavLink } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconSquare, IconSquareCheck } from '@tabler/icons';
import {memo,Fragment, useEffect} from 'react';
const languages = [{
    text:"Tiếng Việt (Việt Nam)",
    id:"vi"
},{
    text:"日本語",
    id:"ja"
},{
    text:"한국어",
    id:"ko"
},{
    text:"Français",
    id:"fr"
},{
    text:"中文 (简体)",
    id:"zh-CN"
},{
    text:"Українська",
    id:"uk"
},{
    text:"Русский",
    id:"ru"
},{
    text:"English",
    id:"en"
}];
function LanguageMenuComponent({children}){
    const [currentLanguage,setLanguage] = useLocalStorage({key:"language",defaultValue:"vi"});
    useEffect(()=>{
        const index = languages.findIndex((item)=>(item.id===currentLanguage));
        if(index === -1){
            setLanguage(languages[0].id)
        }
    },[currentLanguage])
    return (
        <Fragment>
            {
                languages.map((item,index)=>{
                    const Icon = (currentLanguage === item.id) ? IconSquareCheck : IconSquare;
                    return(
                        <NavLink
                            key={index} 
                            label={item.text}
                            icon={<Icon />} 
                            onClick={()=>(setLanguage(item.id))}
                        />
                )})
            }
        </Fragment>
    )
};
export default memo(LanguageMenuComponent)