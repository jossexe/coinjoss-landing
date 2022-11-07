// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 397.7 311.7"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <linearGradient
        id={"QgRzJS9qla"}
        gradientUnits={"userSpaceOnUse"}
        x1={"360.879"}
        y1={"351.455"}
        x2={"141.213"}
        y2={"-69.294"}
        gradientTransform={"matrix(1 0 0 -1 0 314)"}
      >
        <stop offset={"0"} stopColor={"#00ffa3"}></stop>

        <stop offset={"1"} stopColor={"#dc1fff"}></stop>
      </linearGradient>

      <path
        d={
          "M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"
        }
        fill={"url(#QgRzJS9qla)"}
      ></path>

      <linearGradient
        id={"QgRzJS9qlb"}
        gradientUnits={"userSpaceOnUse"}
        x1={"264.829"}
        y1={"401.601"}
        x2={"45.163"}
        y2={"-19.148"}
        gradientTransform={"matrix(1 0 0 -1 0 314)"}
      >
        <stop offset={"0"} stopColor={"#00ffa3"}></stop>

        <stop offset={"1"} stopColor={"#dc1fff"}></stop>
      </linearGradient>

      <path
        d={
          "M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"
        }
        fill={"url(#QgRzJS9qlb)"}
      ></path>

      <linearGradient
        id={"QgRzJS9qlc"}
        gradientUnits={"userSpaceOnUse"}
        x1={"312.548"}
        y1={"376.688"}
        x2={"92.882"}
        y2={"-44.061"}
        gradientTransform={"matrix(1 0 0 -1 0 314)"}
      >
        <stop offset={"0"} stopColor={"#00ffa3"}></stop>

        <stop offset={"1"} stopColor={"#dc1fff"}></stop>
      </linearGradient>

      <path
        d={
          "M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"
        }
        fill={"url(#QgRzJS9qlc)"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
