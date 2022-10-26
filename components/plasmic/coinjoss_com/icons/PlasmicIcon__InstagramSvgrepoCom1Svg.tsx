// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramSvgrepoCom1SvgIcon(
  props: InstagramSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 504.4 504.4"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M296.8 219.8c-10-14-26.4-23.2-44.8-23.2s-34.8 9.2-44.8 23.2c-6.4 9.2-10.4 20.4-10.4 32.4 0 30.4 24.8 55.2 55.2 55.2 30.4 0 55.2-24.8 55.2-55.2 0-12-4-23.2-10.4-32.4z"
        }
      ></path>

      <path
        d={
          "M331.6 220.2c4 8 6.4 20.8 6.4 32 0 47.2-38.4 86-86 86s-86-38.4-86-86c0-11.6 2.4-24 6.4-32H124v128.4c0 16.8 14.8 31.6 31.6 31.6h192.8c16.8 0 31.6-14.8 31.6-31.6V220.2h-48.4zm34-88.8h-46.4v53.2H372V131z"
        }
      ></path>

      <path
        d={
          "M377.6.2H126.4C56.8.2 0 57 0 126.6v251.6c0 69.2 56.8 126 126.4 126H378c69.6 0 126.4-56.8 126.4-126.4V126.6C504 57 447.2.2 377.6.2zM408 219.8v128.8c0 33.6-26 59.6-59.6 59.6H155.6c-33.6 0-59.6-26-59.6-59.6V155.8c0-33.6 26-59.6 59.6-59.6h192.8c33.6 0 59.6 26 59.6 59.6v64z"
        }
      ></path>
    </svg>
  );
}

export default InstagramSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
