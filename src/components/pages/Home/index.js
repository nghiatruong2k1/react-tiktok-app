import {memo,Fragment} from 'react';
import CardVideo from '~/components/CardVideo';
const videos = new Array(5).fill(null);
function Home(props){
    return (
        <Fragment>
            {
                videos.map((item,index)=>{
                    return(
                        <CardVideo loading={!item} item={item ?? {}} key={index}/>
                    )
                })
            }
        </Fragment>
    )
};export default memo(Home)