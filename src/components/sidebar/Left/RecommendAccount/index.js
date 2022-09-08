import {memo} from 'react';
import {Button, Group, Title} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import ProfileLink from './Profile';
const links = [
    {
        id:"@theanh28entertainment",name:"theanh28entertainment",description:""
    },{
        id:"@60giay.com",name:"60giay.com",description:""
    },{
        id:"@tiin.vn",name:"tiin.vn",description:""
    },{
        id:"@60giay.com",name:"60giay.com",description:""
    },{
        id:"@tiin.vn",name:"tiin.vn",description:""
    },{
        id:"@60giay.com",name:"60giay.com",description:""
    },{
        id:"@tiin.vn",name:"tiin.vn",description:""
    },{
        id:"@60giay.com",name:"60giay.com",description:""
    },{
        id:"@tiin.vn",name:"tiin.vn",description:""
    }

];
const MAX_LENGTH_RENDER = 5;
function RecommendAccountComponent(props){
    
    const [isFull,handlerFull] = useDisclosure (false);
    return (
        <Group>
            <Title order={5} className="fullwidth" color={"dimmed"}>Tài khoản đề xuất</Title>
            {
                links.slice(0,isFull ? links.length : MAX_LENGTH_RENDER).map((item,index)=>{
                    return(
                        <ProfileLink key={index}{...item}/>
                    )
                })
            }
            <Button 
                onClick={()=>{handlerFull.toggle()}} 
                variant="subtle" 
                color="red">
                    {isFull ? "Ẩn bớt" : "Xem tất cả"}
            </Button>
        </Group>
    )
};export default memo(RecommendAccountComponent)