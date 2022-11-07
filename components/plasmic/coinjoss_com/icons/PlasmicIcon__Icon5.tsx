// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"none"} fillRule={"evenodd"}>
        <circle cx={"16"} cy={"16"} r={"16"} fill={"#627EEA"}></circle>

        <g fill={"#FFF"} fillRule={"nonzero"}>
          <path fillOpacity={".602"} d={"M16.498 4v8.87l7.497 3.35z"}></path>

          <path d={"M16.498 4L9 16.22l7.498-3.35z"}></path>

          <path
            fillOpacity={".602"}
            d={"M16.498 21.968v6.027L24 17.616z"}
          ></path>

          <path d={"M16.498 27.995v-6.028L9 17.616z"}></path>

          <path
            fillOpacity={".2"}
            d={"M16.498 20.573l7.497-4.353-7.497-3.348z"}
          ></path>

          <path fillOpacity={".602"} d={"M9 16.22l7.498 4.353v-7.701z"}></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
