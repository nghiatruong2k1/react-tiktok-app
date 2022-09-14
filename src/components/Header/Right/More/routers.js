import { MoreLanguageContent} from "./content";
import { KeyBoardPopChild } from "./popchild";
import { IconHelp, IconKeyboard, IconLanguage } from '@tabler/icons';

export const routersMore = [
    {
        icon:IconLanguage,
        text:"Ngôn ngữ", 
        content:MoreLanguageContent
    },{
        icon:IconHelp,
        text:"Phản hồi và trợ giúp",
        to:"/help"
    },{
        icon:IconKeyboard,
        text:"Phím tắt",
        popChild:KeyBoardPopChild
    }
];
