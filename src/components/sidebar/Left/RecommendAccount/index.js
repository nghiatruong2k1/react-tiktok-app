import {memo} from 'react';
import {Anchor, Group, Title} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import ProfileLink from './Profile';
const links = [
    {
        id:"@theanh28entertainment",name:"theanh28entertainment",description:"mota",avatar:"/imgs/avatar-00.jpg",isTicked:true
    },{
        id:"@60giay.com",name:"60giay.com",description:"mota",avatar:"/imgs/avatar-00.jpg"
    },{
        id:"@tiin.vn",name:"tiin.vn",description:"mota",avatar:"/imgs/avatar-00.jpg"
    },{
        id:"@60giay.com",name:"60giay.com",description:"mota",avatar:"/imgs/avatar-00.jpg"
    },{
        id:"@tiin.vn",name:"tiin.vn",description:"mota",avatar:"/imgs/avatar-00.jpg"
    },{
        id:"@60giay.com",name:"60giay.com",description:"mota",avatar:"/imgs/avatar-00.jpg"
    },{
        id:"@tiin.vn",name:"tiin.vn",description:"mota",avatar:"/imgs/avatar-00.jpg"
    },{
        id:"@60giay.com",name:"60giay.com",description:"mota",avatar:"/imgs/avatar-00.jpg"
    },{
        id:"@tiin.vn",name:"tiin.vn",description:"mota",avatar:"/imgs/avatar-00.jpg"
    }

];
const MAX_LENGTH_RENDER = 3;
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
            <Anchor 
                onClick={()=>{handlerFull.toggle()}}
                color="red">
                    {isFull ? "Ẩn bớt" : "Xem tất cả"}
            </Anchor>
        </Group>
    )
};export default memo(RecommendAccountComponent)