// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sMfv1hg7t9bpqK5N2h2Xpc
// Component: nBsKC1UEOs
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantsoR09Sl7PmsYzr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: oR09Sl7pmsYZR/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_coinjoss_com.module.css"; // plasmic-import: sMfv1hg7t9bpqK5N2h2Xpc/projectcss
import sty from "./PlasmicService.module.css"; // plasmic-import: nBsKC1UEOs/css

export type PlasmicService__VariantMembers = {};
export type PlasmicService__VariantsArgs = {};
type VariantPropType = keyof PlasmicService__VariantsArgs;
export const PlasmicService__VariantProps = new Array<VariantPropType>();

export type PlasmicService__ArgsType = {};
type ArgPropType = keyof PlasmicService__ArgsType;
export const PlasmicService__ArgProps = new Array<ArgPropType>();

export type PlasmicService__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h3?: p.Flex<"h3">;
};

export interface DefaultServiceProps {
  className?: string;
}

function PlasmicService__RenderFunc(props: {
  variants: PlasmicService__VariantsArgs;
  args: PlasmicService__ArgsType;
  overrides: PlasmicService__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsoR09Sl7PmsYzr()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"100%" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={
          hasVariant(globalVariants, "screen", "mobileOnly")
            ? ("50%" as const)
            : ("25%" as const)
        }
        loading={"lazy" as const}
        src={{
          src: "/plasmic/coinjoss_com/images/stakingpng.png",
          fullWidth: 1080,
          fullHeight: 1080,
          aspectRatio: undefined
        }}
      />

      <h3
        data-plasmic-name={"h3"}
        data-plasmic-override={overrides.h3}
        className={classNames(
          projectcss.all,
          projectcss.h3,
          projectcss.__wab_text,
          sty.h3
        )}
      >
        {"Enter some text"}
      </h3>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "h3"],
  img: ["img"],
  h3: ["h3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  h3: "h3";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicService__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicService__VariantsArgs;
    args?: PlasmicService__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicService__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicService__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicService__ArgProps,
          internalVariantPropNames: PlasmicService__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicService__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicService";
  } else {
    func.displayName = `PlasmicService.${nodeName}`;
  }
  return func;
}

export const PlasmicService = Object.assign(
  // Top-level PlasmicService renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h3: makeNodeComponent("h3"),

    // Metadata about props expected for PlasmicService
    internalVariantProps: PlasmicService__VariantProps,
    internalArgProps: PlasmicService__ArgProps
  }
);

export default PlasmicService;
/* prettier-ignore-end */
