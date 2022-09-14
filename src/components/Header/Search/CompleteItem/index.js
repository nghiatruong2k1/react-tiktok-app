import { memo, Fragment } from "react";
import clsx from "clsx";
import {
  List,
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  useAutocomplete,
} from "@mui/material";
import { IconSearch } from "@tabler/icons";

function CompleteItemComponent({ params, option }) {
  return (
    <MenuItem {...params} >
      <ListItemIcon>
        {(option?.avatar && (
          <Avatar src={option?.avatar} sx={{ width: "1.4em", height: "1.4em" }} />
        )) || <IconSearch size="1em" />}
      </ListItemIcon>
      <ListItemText
        secondary={option?.description}
      >
        {option?.label || option?.value}
    </ListItemText>
    </MenuItem>
  );
}
export default memo(CompleteItemComponent);
