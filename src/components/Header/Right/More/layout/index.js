import { memo, useContext } from "react";
import { IconArrowBigLeftLines } from "@tabler/icons";
import { MoreContext } from "../provider";
import { initCase } from "../init";
import { IconButton, Typography, CardHeader, CardContent, Divider } from "@mui/material";
function MoreLayoutComponent({ children, title, path, footer }) {
  const { dispath } = useContext(MoreContext);
  return (
    <>
      {title && (
        <>
        <CardHeader
          sx={{ p: 0 }}
          avatar={
            path !== "default" && (
              <IconButton
                onClick={() => {
                  dispath([initCase.BACK]);
                }}
              >
                <IconArrowBigLeftLines />
              </IconButton>
            )
          }
          title={<Typography fontWeight="bold">{title}</Typography>}
        />
        <Divider />
        </>
      )}
      <CardContent className="grow" sx={{ p: 0 }}>
        {children}
      </CardContent>
      <CardContent sx={{ p: 0, pb: 0 }}>{footer}</CardContent>
      <div></div>
    </>
  );
}
export default memo(MoreLayoutComponent);
