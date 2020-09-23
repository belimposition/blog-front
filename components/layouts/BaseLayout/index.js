import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ffbf33;
`;

const ContentWrapper = styled.div`
  padding: 32px;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
`;


const BaseLayout = ({
  className,
  header,
  children,
}) => {
  return (
    <LayoutWrapper className={className}>
      <HeaderWrapper>
        {header}
      </HeaderWrapper>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </LayoutWrapper>
  )
};


BaseLayout.displayName = 'BaseLayout';

export default BaseLayout;
