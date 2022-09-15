import { Autocomplete, Grid, TextField } from '@mui/material';
import { memo, useMemo, useCallback } from 'react';
import { useValidatedState, useLocalStorage } from '@mantine/hooks';
import styles from './styles.module.css';
import SearchProvider from './provider';
import RightOption from './RightOption';
import CompleteItem from './CompleteItem';
const userData = [
    {
        id: '@theanh28entertainment',
        name: 'theanh28entertainment',
        description: 'mota',
        avatar: '/imgs/avatar-00.jpg',
        isTicked: true,
    },
    {
        id: '@60giay.com',
        name: '60giay.com',
        description: 'mota',
        avatar: '/imgs/avatar-00.jpg',
    },
    {
        id: '@tiin.vn',
        name: 'tiin.vn',
        description: 'mota',
        avatar: '/imgs/avatar-00.jpg',
    },
];

function SearchComponent(props) {
    const [{ value, valid }, setValue] = useValidatedState('', (value) => value === '');
    const [histories, setHistory] = useLocalStorage({
        key: 'history-search',
        defaultValue: [],
    });
    const data = useMemo(() => {
        return [
            ...histories.map((value) => ({
                value,
                label: value,
                group: 'Lịch sử tìm kiếm',
            })),
            ...userData.map(({ id, name, ...item }) => ({
                ...item,
                value: id,
                label: name,
                group: 'Tài khoản',
            })),
        ];
    }, [histories, userData]);
    const handleSubmit = useCallback(
        (e) => {
            if (!valid) {
                setHistory((prevData) => {
                    const newData = [value, ...prevData.slice(0, 4)];
                    return [...new Set(newData)];
                });
            }
            e.isDefaultPrevented();
        },
        [value, valid, histories],
    );
    const handleClear = useCallback((e) => {
        setValue('');
        e.isDefaultPrevented();
    }, []);
    return (
        <Grid item {...props}>
            <SearchProvider {...{ value, valid, setValue, data }}>
                <Autocomplete
                    classes={{
                        paper: styles.paper,
                    }}
                    fullWidth={true}
                    autoFocus={true}
                    autoComplete={true}
                    disableClearable
                    freeSolo
                    value={value}
                    onChange={(e, v) => {
                        setValue(v.value);
                    }}
                    inputValue={value}
                    onInputChange={(e, v) => {
                        setValue(v);
                    }}
                    loading={true}
                    loadingText={'Không có gợi ý tìm kiếm'}
                    renderInput={({ InputProps, ...params }) => (
                        <TextField
                            {...params}
                            size="small"
                            InputProps={{
                                ...InputProps,
                                className: styles.inner,
                                endAdornment: <RightOption onSubmit={handleSubmit} onClear={handleClear} />,
                            }}
                        />
                    )}
                    options={data}
                    groupBy={(option) => option.group}
                    renderOption={(params, option) => (
                        <CompleteItem {...{ params, option }} key={`${params.key}-${params.id}`} />
                    )}
                />
            </SearchProvider>
        </Grid>
    );
}
export default memo(SearchComponent);
