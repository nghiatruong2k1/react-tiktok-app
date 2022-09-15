import {
    memo,
    useEffect,
    useMemo,
    useReducer,
    useRef,
} from 'react';
import { IconDotsVertical } from '@tabler/icons';
import MoreLayout from './layout';
import { initCase, initState, reducerState } from './init';
import MoreProvider from './provider';
import { routersMore } from './routers';
import { MoreDefaultContent } from './content';
import { useDisclosure } from '@mantine/hooks';
import { IconButton, Card, Popover } from '@mui/material';
function MoreComponent(props) {
    const [state, dispath] = useReducer(
        reducerState,
        initState,
    );
    const ref = useRef();
    const [isOpen, { close, open }] = useDisclosure();
    const viewData = useMemo(() => {
        if (state.path.length === 0) {
            return routersMore;
        } else {
            return state.path.reduce(
                (result, item, index) => {
                    return result[item];
                },
                routersMore,
            );
        }
    }, [state]);
    console.log(viewData);
    useEffect(() => {
        if (isOpen) {
            dispath([initCase.RESET]);
        }
    }, [isOpen]);
    return (
        <MoreProvider {...{ state, dispath }}>
            <>
                <IconButton
                    ref={ref}
                    onMouseEnter={(e) => {
                        open();
                    }}
                    onClick={() => {
                        open();
                    }}
                >
                    <IconDotsVertical />
                </IconButton>
                <Popover
                    open={Boolean(ref.current && isOpen)}
                    onClose={(e) => {
                        close();
                    }}
                    anchorEl={ref.current}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    PaperProps={{
                        component: Card,
                        onMouseLeave: (e) => {
                            close();
                        },
                        sx: {
                            p: 1,
                        },
                    }}
                >
                    {typeof viewData === 'object' && (
                        <MoreLayout
                            title={
                                state.path.length > 0 &&
                                viewData.text
                            }
                        >
                            {(Array.isArray(viewData) && (
                                <MoreDefaultContent
                                    list={viewData}
                                />
                            )) ||
                                (Array.isArray(
                                    viewData.data,
                                ) && (
                                    <MoreDefaultContent
                                        list={viewData.data}
                                    />
                                )) || <viewData.content />}
                        </MoreLayout>
                    )}
                </Popover>
            </>
        </MoreProvider>
    );
}
export default memo(MoreComponent);
