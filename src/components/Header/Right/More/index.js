import {memo,useMemo,useReducer} from 'react';
import {ActionIcon,Popover, Tooltip} from "@mantine/core";
import {
    IconDotsVertical
} from "@tabler/icons";
import MoreLayout from './layout';
import { initCase, initState, reducerState } from './init';
import MoreProvider from "./provider";
import {routersMore} from "./routers";
import { MoreDefaultContent } from "./page";
import { useHover } from '@mantine/hooks';
function MoreComponent(props){
    const [state,dispath] = useReducer(reducerState,initState);
    const { hovered, ref } = useHover();
    const viewData = useMemo(()=>{
        if(state.path.length === 0){
            return routersMore
        }else{
            return state.path.reduce((result,item,index)=>{
                return result[item]
            },routersMore)
        }
    },[state]);
    return (
    <MoreProvider {...{state,dispath}}>
        <div ref={ref}>
            <Popover 
                withArrow  
                trigger="hover"
                width={230}
                opened={hovered}
                onClose={()=>{dispath([ initCase.RESET ])}}
            >
                <Popover.Target>
                    <ActionIcon  variant="outline" size="lg">
                        <IconDotsVertical /> 
                    </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown>
                    {
                        (typeof(viewData) === 'object') && (
                            <MoreLayout title={(state.path.length > 0) && viewData.text }>
                                {
                                    (Array.isArray(viewData) && <MoreDefaultContent list={viewData}/>)
                                    || (Array.isArray(viewData.data) && <MoreDefaultContent list={viewData.data}/>)
                                    || <viewData.children />
                                }
                            </MoreLayout>
                        )
                    }
                </Popover.Dropdown>
            </Popover>
        </div>
    </MoreProvider>
    )
};
export default memo(MoreComponent)