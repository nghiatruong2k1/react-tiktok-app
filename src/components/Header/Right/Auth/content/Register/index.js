import { memo } from "react";
import { routersLogin } from "../../routers";
import {
  List,
  ListItem,
  Stack,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Link,
  Typography,
} from "@mui/material";
import { Link as LinkTo } from "react-router-dom";
function RegisterComponent(props) {
  return (
    <>
      <Stack component={List} spacing={1} disablePadding>
        {
            routersLogin.map((route, index) => (
                <Paper
                    component={ListItem}
                    variant="outlined"
                    disablePadding
                    key={index}
                >
                    <ListItemButton
                    to={route.path}
                    component={LinkTo}
                    variant="outlined"
                    >
                    <ListItemIcon>{<route.icon />}</ListItemIcon>
                    <ListItemText>{route.text}</ListItemText>
                    </ListItemButton>
                </Paper>
            ))
        }
      </Stack>
      <Typography>
        Bằng cách tiếp tục, bạn đồng ý với
        <Link underline="hover" fontWeight="bold" component={LinkTo} to="#">
          {" Điều khoản Sử dụng "}
        </Link>
        của TikTok và xác nhận rằng bạn đã đọc hiểu
        <Link underline="hover" fontWeight="bold" component={LinkTo} to="#">
          {" Chính sách Quyền riêng tư "}
        </Link>
        của TikTok.
      </Typography>
    </>
  );
}
export default memo(RegisterComponent);
