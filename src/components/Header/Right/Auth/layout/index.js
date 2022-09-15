import { memo, Fragment, useEffect, useContext } from "react";
import { IconCircleX, IconLogin } from "@tabler/icons";
import { SetTitle } from "../../../../../config/SetTitle";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { AuthContext } from "../provider";
import { initCase } from "../init";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
function AuthLayoutComponent({ title, footer, children }) {
  const [isOpened, { open, close }] = useDisclosure(false);
  const { height } = useViewportSize();
  const { dispath } = useContext(AuthContext);
  useEffect(() => {
    SetTitle(title);
  }, [title]);
  useEffect(() => {
    if (isOpened) {
      dispath([initCase.LOGIN]);
    }
  }, [isOpened]);
  return (
    <Fragment>
      <Button
        variant="contained"
        startIcon={<IconLogin />}
        onClick={() => {
          open();
        }}
      >
        Đăng nhập
      </Button>
      <Dialog
        open={isOpened}
        onClose={() => {
          close();
        }}
        maxWidth="xs"
        fullWidth={true}
        scroll={height > 400 ? "paper" : "body"}
      >
        <DialogActions>
          <IconButton
            onClick={() => {
              close();
            }}
          >
            <IconCircleX size={30} />
          </IconButton>
        </DialogActions>
        <DialogContent sx={{ px: 5, py: 0.5 }}>
          <Stack spacing={1}>
            <DialogTitle align="center" fontWeight={"bold"} sx={{ py: 0 }}>
              {title}
            </DialogTitle>
            {children}
          </Stack>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", alignItems: "center" }}>
          {footer}
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
export default memo(AuthLayoutComponent);
