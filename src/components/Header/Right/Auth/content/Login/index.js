import { memo } from "react";

import { routersLogin } from "../../routers";
import {
  List,
  ListItem,
  Stack,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper
} from "@mui/material";
import { Link } from "react-router-dom";
function LoginComponent(props) {
  return (
    <>
      <List component={ Stack } spacing={1} disablePadding>
        {routersLogin.map((route, index) => (
          <ListItem component={Paper} variant="outlined" disablePadding key={index}>
              <ListItemButton
                to={route.path}
                component={Link}
                variant="outlined"
              >
                <ListItemIcon>{<route.icon />}</ListItemIcon>
                <ListItemText>{route.text}</ListItemText>
              </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default memo(LoginComponent);
