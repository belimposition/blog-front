import React from 'react';
import styled, { css } from 'styled-components';


const WHITE_THEME = css`
  background: #fff;

  &:hover {
    cursor: pointer;
    background: #FFF3DA;
  }

  &:disabled {
    cursor: not-allowed;
    color: #E0E0E0;
  }

  &:active {
    box-shadow: inset 0px 2px 0px #F0A70E;
    padding-top: 2px;
  }

  &::after {
    background: linear-gradient(
      90deg,
      transparent 0%,
      #fff 53.12%,
      transparent 100%
    );
  }
`;


const YELLOW_THEME = css`
  background: var(--color-big);
  border: none;

  &:active {
    box-shadow: inset 0px 2px 0px #FF9900;
    padding-top: 2px;
  }

  &:hover {
    background: #FFC633;
  }

  &:disabled {
    background: var(--color-line);
    color: var(--color-white);
  }

  &::after {
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--color-white) 53.12%,
      transparent 100%
    );
  }
`;

const ButtonWrapper = styled.button`
  font-family: var(--font-graphic);
  font-style: normal;
  font-weight: bold;
  text-align: center;
  position: relative;
  border-radius: 4px;
  text-decoration: none;
  user-select: none;
  outline: none;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  

  height: 40px;
  font-size: 14px;
  line-height: 20px;
  padding-left: 32px;
  padding-right: 32px;

  ${({ theme }) => theme === 'white' && WHITE_THEME}
  ${({ theme }) => theme === 'yellow' && YELLOW_THEME}
`;

const Button = ({
  className,
  onClick,
  isDisabledButton,
  theme = 'white',
  children,
}) => {
  return (
    <ButtonWrapper
      className={className}
      disabled={isDisabledButton}
      onClick={onClick}
      theme={theme}
    >
      {children}
    </ButtonWrapper>
  );
}

export default Button;