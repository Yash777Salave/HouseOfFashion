import styled, { css } from 'styled-components';

import { DivMixin, DivProps } from './Div';

export const Input = styled.input<DivProps & { invalid?: boolean }>`
  height: 34px;
  background: #ffffff;
  border: 1px solid #dae0e9;
  box-sizing: border-box;
  border-radius: 7px;
  outline: none;
  font-size: 12px;
  width: 180px;
  ${({ invalid }) =>
    invalid &&
    css`
      border: 1px solid #d61414;
    `};

  &::placeholder {
    color: #ACB5C2;
    font-size: 11px;
    /* font-style: italic; */
    line-height: 14.98px;
    letter-spacing: -0.1px;
  }

  &:focus,
  &:hover {
    box-shadow: 0 1px 7px 0 #dae0e9;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${DivMixin};
`;