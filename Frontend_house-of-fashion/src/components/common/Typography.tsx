import styled, { css } from "styled-components";

import { DivMixin, type DivProps } from "./Div";

const variants = {
  primary: css``,
  secondary: css``,
};

const sizes = {
  0: css`
    font-size: 25px;
    /* line-height: 34px; */
    letter-spacing: 0;
  `,
  1: css`
    font-size: 20px;
    /* line-height: 27px; */
    letter-spacing: -0.2px;
  `,
  2: css`
    font-size: 16px;
    /* line-height: 22px; */
    letter-spacing: -0.1px;
  `,
  3: css`
    font-size: 13px;
    /* line-height: 18px; */
    letter-spacing: -0.1px;
  `,
  4: css`
    font-size: 12px;
    /* line-height: 17px; */
    letter-spacing: -0.1px;
  `,
  5: css`
    font-size: 11px;
    /* line-height: 15px; */
    letter-spacing: -0.1px;
  `,
  6: css`
    font-size: 10px;
    /* line-height: 14px; */
    letter-spacing: -0.1px;
  `,
  7: css`
    font-size: 9px;
    /* line-height: 13px; */
    letter-spacing: -0.1px;
  `,
  8: css`
    font-size: 8px;
    letter-spacing: 0.2px;
  `,
  9: css`
    font-size: 9px;
    /* line-height: 13px; */
    letter-spacing: -0.1px;
  `,
  10: css`
    font-size: 10px;
    /* line-height: 14px; */
    letter-spacing: -0.1px;
  `,
  11: css`
    font-size: 11px;
    /* line-height: 15px; */
    letter-spacing: -0.1px;
  `,
  12: css`
    font-size: 12px;
    /* line-height: 16px; */
    letter-spacing: -0.2px;
  `,
  13: css`
    font-size: 13px;
    /* line-height: 18px; */
    /* identical to box height */

    letter-spacing: -0.2px;
  `,
  14: css`
    font-size: 14px;
    line-height: 16px;
    /* identical to box height */

    /* letter-spacing: -0.2px; */
  `,
  16: css`
    font-size: 16px;
    /* line-height: 24px; */
    letter-spacing: 0.5px;
  `,
};

export interface TypographyMixinProps {
  // size
  s?: keyof typeof sizes;
  // variant
  v?: "primary" | "secondary";
}

export interface TypographyProps extends DivProps, TypographyMixinProps {}

export const typographyMixin = css<TypographyMixinProps>`
  ${({ v }) => v && variants[v]};
  ${({ s }) => s !== undefined && sizes[s]};
`;

export const Typography = styled.div<TypographyProps>`
  ${typographyMixin};
  ${DivMixin};
`;

// Implement using Styled-System variant API

/*
export const Typography1 = styled.div<TypographyProps>`
  ${variant({
    variants: {


    },
  })};

  ${variant({
    prop: 's',
    variants: {
      0: {
        fontSize: '25px',
        lineHeight: '34px',
        letterSpacing: 0,
      },
      1: {
        fontSize: '20px',
        lineHeight: '27px',
        letterSpacing: '-0.2px',
      },
      2: {
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '-0.1px',
      },
      3: {
        fontSize: '13px',
        lineHeight: '18px',
        letterSpacing: '-0.1px',
      },
      4: {
        fontSize: '12px',
        lineHeight: '17px',
        letterSpacing: '-0.1px',
      },
      5: {
        fontSize: '11px',
        lineHeight: '15px',
        letterSpacing: '-0.1px',
      },
      6: {
        fontSize: '10px',
        lineHeight: '14px',
        letterSpacing: '-0.1px',
      },
      7: {
        fontSize: '9px',
        lineHeight: '13px',
        letterSpacing: '-0.1px',
      },
    },
  })};

  ${DivMixin};
`;
*/
