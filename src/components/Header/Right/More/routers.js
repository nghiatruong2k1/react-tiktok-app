import { MoreLanguageContent } from "./page";
import { IconHelp, IconKeyboard, IconLanguage } from '@tabler/icons';

export const routersMore = [
    {
        icon:IconLanguage,
        text:"Ngôn ngữ", 
        children:MoreLanguageContent
    },{
        icon:IconHelp,
        text:"Phản hồi và trợ giúp",
        to:"/help"
    },{
        icon:IconKeyboard,
        text:"Phím tắt"
    }
];
