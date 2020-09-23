import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import Filters from './components/Filters';
import PostsList from './components/PostsList';

const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


const StyledFilters = styled(Filters)`
  margin-bottom: 32px;
`;

const StyledPostsList = styled(PostsList)`
  margin-bottom: 32px;
`;


const MainPageContent = ({ className }) => {
  return (
    <MainPageWrapper className={className}>
      <StyledFilters />
      <StyledPostsList />
    </MainPageWrapper>
  );
  }

MainPageContent.propTypes = {
};

MainPageContent.defaultProps = {
};

export default MainPageContent;
