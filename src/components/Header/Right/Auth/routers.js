import {
    IconQrcode,
    IconUser,
    IconBrandFacebook,
    IconBrandGoogle,
    IconBrandTwitter,
    IconBrandApple,
    IconBrandInstagram,
} from '@tabler/icons';
import { LoginContent, RegisterContent } from './content';
import { LoginFooter, RegisterFooter } from './footer';

export const routersLogin = [
    {
        path: 'qr',
        text: 'Sử dụng mã QR',
        icon: IconQrcode,
        onlyLogin: true,
    },
    {
        path: 'user',
        text: 'Số điện thoại / Email / TikTok ID',
        icon: IconUser,
    },
    {
        path: 'facebook',
        text: 'Tiếp tục với Facebook',
        icon: IconBrandFacebook,
    },
    {
        path: 'google',
        text: 'Tiếp tục với Google',
        icon: IconBrandGoogle,
    },
    {
        path: 'twitter',
        text: 'Tiếp tục với Twitter',
        icon: IconBrandTwitter,
    },
    {
        path: 'apple',
        text: 'Tiếp tục với Apple',
        icon: IconBrandApple,
    },
    {
        path: 'instagram',
        text: 'Tiếp tục với Instagram',
        icon: IconBrandInstagram,
    },
];

export const routersAuth = {
    login: {
        title: 'Đăng nhập vào TikTok',
        content: <LoginContent />,
        footer: <LoginFooter />,
    },
    register: {
        title: 'Đăng ký tài khoản TikTok',
        content: <RegisterContent />,
        footer: <RegisterFooter />,
    },
};
