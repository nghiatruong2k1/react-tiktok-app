import { useDisclosure } from "@mantine/hooks";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment, memo, useContext } from "react";
import { Link } from "react-router-dom";
import { initCase } from "../../init";
import { MoreContext } from "../../provider";
function ItemComponent({ to, subChild, popChild, onClick, ...props }) {
  const Child = subChild || popChild || null;
  const [isOpen, { open, close, toggle }] = useDisclosure();
  return (
    <ListItem
      disablePadding
      style={{ fontWeight: "bold" }}
      onClick={() => {
        onClick && onClick();
        Child && toggle();
      }}
    >
      <ListItemButton component={(to && Link) || "button"} to={to}>
        <ListItemIcon>{<props.icon />}</ListItemIcon>
        <ListItemText>{props.text}</ListItemText>
        {Child && (
          <Child
            open={isOpen}
            onOpen={() => {
              open();
            }}
            onClose={() => {
              close();
            }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
}
function MoreDefaultComponent({ list }) {
  const { dispath } = useContext(MoreContext);
  return (
    <List disablePadding>
      {list.map(({ content, data, ...item }, index) => {
        return (
          <ItemComponent
            key={index}
            onClick={() => {
              if (content || data) {
                dispath([initCase.NEXT, index]);
              }
            }}
            {...item}
          />
        );
      })}
    </List>
  );
}
export default memo(MoreDefaultComponent);
