import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { getPostsSelector } from '@store/posts/selectors';

import Post from './components/Post';

const PostsListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StyledPost = styled(Post)``;

const PostsList = ({
  className
}) => {
  const actualList = useSelector(getPostsSelector);


  return (
    <PostsListWrapper className={className}>
      {actualList.map(post => <StyledPost key={post._id} post={post} />)}
    </PostsListWrapper>
  );
}

PostsList.displayName = 'PostsList';

export default PostsList;
