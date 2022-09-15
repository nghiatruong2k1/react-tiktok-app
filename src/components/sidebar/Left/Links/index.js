import { memo } from 'react';
import {
    Link as LinkTo,
    useLocation,
} from 'react-router-dom';
import { Stack, Link } from '@mui/material';
import styles from './styles.module.css';
const links = [
    [
        {
            path: '/',
            label: 'Giới thiệu',
        },
        {
            path: '/',
            label: 'TikTok Browse',
        },
        {
            path: '/',
            label: 'Bảng tin',
        },
        {
            path: '/',
            label: 'Liên hệ',
        },
    ],
    [
        {
            path: '/',
            label: 'Quảng cáo',
        },
        {
            path: '/',
            label: 'Developers',
        },
        {
            path: '/',
            label: 'Transparency',
        },
        {
            path: '/',
            label: 'TikTok Rewards',
        },
    ],
    [
        {
            path: '/',
            label: 'Trợ giúp',
        },
        {
            path: '/',
            label: 'An toàn',
        },
        {
            path: '/',
            label: 'Điều khoản',
        },
        {
            path: '/',
            label: 'Quyền riêng tư',
        },
        {
            path: '/',
            label: 'Hướng dẫn',
        },
    ],
];

function MenuComponent(props) {
    const location = useLocation();
    return (
        <Stack gap={1}>
            {links.map((group, index) => (
                <Stack
                    key={index}
                    gap={1}
                    direction={'row'}
                    flexWrap={'wrap'}
                >
                    {group.map(({ path, label }, index) => {
                        return (
                            <Link
                                key={index}
                                component={LinkTo}
                                to={path}
                                underline={'hover'}
                                className={styles.link}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </Stack>
            ))}
        </Stack>
    );
}
export default memo(MenuComponent);
