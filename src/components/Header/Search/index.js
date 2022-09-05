import { 
    Grid ,
    TextInput,
    CloseButton, 
    ActionIcon,
    Divider
} from '@mantine/core';
import {IconSearch} from '@tabler/icons';
import {
    memo,
    useReducer
} from 'react';
import styles from './styles.module.css';
import {initState,initCase,reducerState} from './init';
import SearchProvider from './provider';
function SearchComponent(props){
    const [state,dispath] = useReducer(reducerState,initState);
    return (
        <Grid.Col {...props}>
        <SearchProvider {...{state,dispath}}>
            <TextInput
                value={state.value}
                onChange={({target:{value}})=>{dispath([initCase.CHANGE_VALUE,value])}}
                radius="xl"
                size="md"
                variant="filled"
                rightSectionWidth={80}
                rightSection={
                    <>
                        <CloseButton 
                            onClick={()=>{dispath([initCase.CHANGE_VALUE,""])}}
                            radius="xl" 
                            variant="filled" 
                            size="xs"
                            disabled={(state.value == '')}
                            hidden={(state.value == '')}
                        />
                        <Divider 
                            orientation="vertical" 
                            my={'0.4rem'} 
                            mx={'0.8rem'}
                        />
                        <ActionIcon variant="transparent">
                            <IconSearch />
                        </ActionIcon>
                    </>
                }
                placeholder="Tìm kiếm"
            />
        </SearchProvider>
        </Grid.Col>
    )
};export default memo(SearchComponent)