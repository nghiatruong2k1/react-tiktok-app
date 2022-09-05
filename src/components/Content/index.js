import {memo,Fragment} from 'react';
function ContentComponent({children}){
    return (
        <Fragment>
            {children}
        </Fragment>
    )
};export default memo(ContentComponent)