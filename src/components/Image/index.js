import { memo } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { Paper } from "@mui/material";
const fits = {
  cover: true,
  contain: true,
};
function ImageComponent({
  className,
  height = "auto",
  width = "auto",
  classes = {},
  alt,
  src,
  placeholder,
  withPlaceholder = true,
  fit,
  sx = {},
  ...props
}) {
  const { wrapper, image } = classes;
  return (
    <Paper
      elevation={0}
      className={clsx(styles.wrapper, {
        className: className,
        wrapper: wrapper,
      })}
      sx={{
        height: height,
        width: width,
        ...sx,
      }}
      {...props}
    >
      <figure className={styles.figure}>
        <img
          className={clsx(styles.image, {
            image: image,
            [styles[fit]]: fits[fit],
          })}
          alt={alt || src || "Hình ảnh"}
          src={src}
          style={{
            height: height,
            width: width,
          }}
        />
        <div className={styles.placeholder}></div>
      </figure>
    </Paper>
  );
}
export default memo(ImageComponent);
