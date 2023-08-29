import styled, { css } from "styled-components";
import {
  background,
  type BackgroundProps,
  border,
  type BorderProps,
  color,
  type ColorProps,
  flexbox,
  type FlexboxProps,
  grid,
  type GridProps,
  layout,
  type LayoutProps,
  position,
  type PositionProps,
  shadow,
  type ShadowProps,
  space,
  type SpaceProps,
  typography,
  type TypographyProps,
} from "styled-system";

export interface DivProps
  extends GridProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    BorderProps,
    ShadowProps,
    FlexboxProps,
    PositionProps,
    TypographyProps,
    BackgroundProps {}

export const Div = styled.div<DivProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
    minHeight: 0,
  },
  grid,
  space,
  color,
  layout,
  border,
  shadow,
  flexbox,
  position,
  typography,
  background
);

export const FlexRow = styled(Div)`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  align-items: center;
`;

export const FlexCol = styled(Div)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const CenteredDiv = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const FullSizeCenteredDiv = styled(CenteredDiv)`
  height: 100%;
  width: 100%;
`;

export const DivMixin = css(
  grid,
  space,
  color,
  layout,
  border,
  shadow,
  flexbox,
  position,
  typography,
  background
);
