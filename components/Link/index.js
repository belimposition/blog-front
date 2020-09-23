import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

const StyledLink = styled.a`
  outline: none;
  background: none;
  border: none;
  text-align: left;
  padding: 0;
  margin: 0;
  font-size: 17px;
  line-height: 24px;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  font-family: var(--font-graphik);

  &:hover, &:visited:hover {
    color: #E70000;
  }
`;


const Link = ({
  className,
  href,
  children,
  ...otherProps
}) => {
  return (
    <NextLink
      href={href}
    >
      <StyledLink
        className={className}
        href={href}
        {...otherProps}
      >
        {children}
      </StyledLink>
    </NextLink>
  )
}


export default Link;