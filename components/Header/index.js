import React from 'react';
import styled from 'styled-components';

import Link from '@components/Link';

import UserBox from './components/UserBox';

const HeaderBox = styled.div`
  padding: 32px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  height: 100%;
`;

const StyledUserBox = styled(UserBox)``;

const StyledLogoLink = styled(Link)`
  height: 80px;
  width: 80px;
`;

const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const Header = ({
  className
}) => {

  return (
    <HeaderBox className={className}>
      <StyledLogoLink href='/'><StyledLogo src='../../static/images/logo.png' /></StyledLogoLink>
      <StyledUserBox />
    </HeaderBox>
  )
};

Header.displayName = 'Header';

export default Header;
