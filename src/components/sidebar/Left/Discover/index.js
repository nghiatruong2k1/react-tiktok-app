import {memo} from 'react';
import {Link,useLocation} from "react-router-dom"
import { Button, Group, Title } from '@mantine/core';
import { IconHash, IconMusic } from '@tabler/icons';
const types = {
    tag:IconHash,
    music:IconMusic
}
const tags = [
    {
        path:"1",label:"Hãy trao cho anh",type:"music"
    },{
        path:"2",label:"sontung"
    },{
        path:"3",label:"game"
    },{
        path:"4",label:"Save Me"
    },{
        path:"5",label:"sontung"
    },{
        path:"6",label:"sontung"
    },{
        path:"7",label:"sontung"
    },{
        path:"8",label:"MTP"
    }
];

const MAX_LENGTH_RENDER = 10;
function DiscoverComponent(props){
    const location = useLocation();
    return (
        <Group spacing={4}>
            <Title order={5} className="fullwidth" color={"dimmed"}>Khám phá</Title>
             {
                tags.slice(0,MAX_LENGTH_RENDER).map(({path,label,type},index)=>{
                    const Icon = types[type] || types["tag"];
                    return(
                        <Button   
                            key={index} 
                            component={ Link } 
                            leftIcon={<Icon />}
                            to={`/tag/${path}`} 
                            variant="outline"
                            size="xs"
                            radius="xl"
                            color={(location.pathname === `/tag/${path}`) ? "red.8" : "dark.3"}
                            style={{fontWeight:"bold"}}
                        >
                            {label}
                        </Button>
                    )
                })
            }
        </Group>
    )
};export default memo(DiscoverComponent)