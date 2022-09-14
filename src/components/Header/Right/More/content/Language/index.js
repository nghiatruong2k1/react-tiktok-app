
import { useLocalStorage } from "@mantine/hooks";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { IconSquare, IconSquareCheck } from "@tabler/icons";
import { memo,  useEffect } from "react";
const languages = [
  {
    text: "Tiếng Việt (Việt Nam)",
    id: "vi",
  },
  {
    text: "日本語",
    id: "ja",
  },
  {
    text: "한국어",
    id: "ko",
  },
  {
    text: "Français",
    id: "fr",
  },
  {
    text: "中文 (简体)",
    id: "zh-CN",
  },
  {
    text: "Українська",
    id: "uk",
  },
  {
    text: "Русский",
    id: "ru",
  },
  {
    text: "English",
    id: "en",
  },
];
function LanguageMenuComponent({ children }) {
  const [currentLanguage, setLanguage] = useLocalStorage({
    key: "language",
    defaultValue: "vi",
  });
  useEffect(() => {
    const index = languages.findIndex((item) => item.id === currentLanguage);
    if (index === -1) {
      setLanguage(languages[0].id);
    }
  }, [currentLanguage]);
  return (
    <List>
      {languages.map((item, index) => {
        const Icon = currentLanguage === item.id ? IconSquareCheck : IconSquare;
        return (
          <ListItem
            disablePadding
            key={index}
            style={{ fontWeight: "bold" }}
            onClick={() => setLanguage(item.id)}
          >
            <ListItemButton component={"button"} >
              <ListItemIcon>{<Icon />}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
export default memo(LanguageMenuComponent);
