
import { NavLink } from "@mantine/core";
import {memo,Fragment, useContext} from 'react';
import { Link} from 'react-router-dom';
import { initCase } from "../../init";
import { MoreContext } from "../../provider";
function MoreDefaultComponent({list}){
    const {dispath} = useContext(MoreContext);
    return (
        <Fragment>
            {
                list.map(({to,children,data,...item},index)=>{
                    return(
                        <NavLink
                            key={index} 
                            icon={<item.icon />} 
                            label={item.text}
                            component={(to && Link) || "button"}
                            to={to}
                            style={{fontWeight:"bold"}}
                            onClick={()=>{(children || data) && dispath( [initCase.NEXT,index] )}}
                        />
                )})
            }
        </Fragment>
    )
};
export default memo(MoreDefaultComponent)