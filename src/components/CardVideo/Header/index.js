import {memo} from 'react';
import { Link } from 'react-router-dom';
import { CardHeader,  Skeleton , Avatar } from '@mui/material';
import { LoadingButton } from '@mui/lab'
import styles from './styles.module.css';
function CardVideoHeaderComponent({loading,name,description,avatar,id}){
    return (
    <CardHeader
        classes={{
            root:styles.header,
            action:styles.action,
            avatar:styles.avatar,
            title:styles.title
        }}
        avatar={
            <Avatar  
                className={"fullview"}
                src={avatar} 
                alt={name ?? ""} 
            >
                {loading && <Skeleton className="fullview" variant='circle'/>}
            </Avatar>
        }
        titleTypographyProps={{
            component: loading ? "p" : Link,
            to:id || "#"
        }}
        title={
            <>
                { loading ? <Skeleton className="fullview"/> : name}
            </>
        }
        subheader={
            <>
                { loading ? <Skeleton className="fullview"/> : description}
            </>
        }
        action={
            <LoadingButton 
                loading={loading}
                variant="outlined" 
                color='error'
            >
                    Theo dõi
            </LoadingButton>
        }
    />
    )
};
export default memo(CardVideoHeaderComponent)