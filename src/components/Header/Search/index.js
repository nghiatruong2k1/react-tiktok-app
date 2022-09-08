import { 
    Grid ,
    Autocomplete,
    CloseButton, 
    ActionIcon,
    Divider,
    Group,
    Text,
    Avatar
} from '@mantine/core';
import {IconCircleX, IconSearch} from '@tabler/icons';
import {
    memo,
    useMemo,
    forwardRef,
    useState,
    useEffect
} from 'react';
import { 
    useValidatedState,
    useLocalStorage,
    useResizeObserver,
    useViewportSize
} from '@mantine/hooks';

const userData = [{
    value:"aaaaaaaaaa",
    description:"aaaaaaaaaa",
    image:"/"
},{
    value:"aaaaaaaaaa",
    description:"aaaaaaaaaa",
    image:"/"
},{
    value:"aaaaaaaaaa",
    description:"aaaaaaaaaa",
    image:"/"
},{
    value:"aaaaaaaaaa",
    description:"aaaaaaaaaa",
    image:"/"
},{
    value:"aaaaaaaaaa",
    description:"aaaaaaaaaa",
    image:"/"
}];

function SearchComponent(props){
    const [{ value, valid }, setValue] = useValidatedState('',(value) => value === '');
    const [historyData, setHistoryData] = useLocalStorage({ key: 'history-search', defaultValue: [] });
    const [ref, rect] = useResizeObserver();
    const {height} = useViewportSize();
    const [fullHeight,setHeight] = useState(0);
    useEffect(()=>{
        if(ref.current?.children[1]){
            setHeight(height-ref.current.children[1].offsetTop - 10)
        }
    },[height,ref.current])
    const data = useMemo(()=>{
        return [
            ...historyData.map((value)=>({
                value,group:"Lịch sử tìm kiếm"
            })),...userData.map((item)=>({
                ...item,group:"Tài khoản"
            }))
        ]
    },[historyData,userData]);
    return (
        <Grid.Col {...props}>
            <>
                <Autocomplete
                    wrapperProps={{ref}}
                    initiallyOpened={true}
                    maxDropdownHeight={fullHeight}
                    data={data}
                    value={value}
                    onChange={(value)=>{setValue(value)}}
                    radius="xl"
                    size="md"
                    variant="filled"
                    limit={20}
                    rightSectionWidth={80}
                    rightSection={
                        <>
                            <ActionIcon 
                                variant="transparent"
                                size="xs"
                                disabled={(value === '')}
                                hidden={(value === '')}
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setValue("");
                                }}
                            >
                                <IconCircleX />
                            </ActionIcon>
                            <Divider 
                                orientation="vertical" 
                                my={'0.4rem'} 
                                mx={'0.8rem'}
                            />
                            <ActionIcon 
                                variant="transparent"
                                onClick={()=>{
                                    !valid && setHistoryData(prevData=>{
                                        const newData = [value,...prevData.slice(0,4)];
                                        return [...new Set(newData)];
                                    })
                                }}
                            >
                                <IconSearch />
                            </ActionIcon>
                        </>
                    }
                    placeholder="Tìm kiếm"
                    itemComponent={AutoCompleteItem}
                />
            </>
        </Grid.Col>
    )
};
export default memo(SearchComponent)
const AutoCompleteItem = forwardRef(({ description, value, image,id, ...others }, ref) => {
     console.log({description, value, image,id, ...others})
    return(
      <div ref={ref} {...others} key={id}>
        <Group noWrap>
          {
            (image && <Avatar src={image}/>)
            || <IconSearch size="1em"/>
          } 
          <div>
            <Text>{value}</Text>
            <Text size="xs" color="dimmed">
              {description}
            </Text>
          </div>
        </Group>
      </div>
    )}
);