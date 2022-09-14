import { memo, useContext } from "react";
import { AuthContext } from "../../provider";
import { initCase } from "../../init";
import {
  Link as Link,
  Typography
} from "@mui/material";
function LoginFooterComponent(props) {
  const { dispath } = useContext(AuthContext);
  return (
    <>
      <Typography align="center" sx={{py:1}}>
        Bạn không có tài khoản? 
        <Link 
          to="#" 
          underline='hover'
          fontWeight='bold'
          onClick={() => dispath([initCase.REGISTER])}
        >
            {" Đăng ký "}
        </Link>
      </Typography>
    </>
  );
}
export default memo(LoginFooterComponent);
