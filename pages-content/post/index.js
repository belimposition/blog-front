import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import { getPostById } from '@store/posts/selectors';
import { getIsAuth } from '@store/user/selectors';

import Comments from './components/Comments';

const PostPageWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  width: 960px;
`;

const StyledTitle = styled.div`
  margin-bottom: 24px;
  font-size: 46px;
  line-height: 48px;
  color: #000;
`;

const StyledPostContent = styled.div`
  margin-bottom: 32px;
  padding-bottom: 16px;
  font-size: 20px;
  line-height: 24px;
  color: #000;
`;

const StyledComments = styled(Comments)``;


const PostPageContent = ({ className, id }) => {
  const post = useSelector(getPostById(id));
  const isAuth = useSelector(getIsAuth);
  // post.comments = MOCK_COMMENTS;

  return (
    <PostPageWrapper className={className}>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledPostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      {isAuth && <StyledComments comments={post.comments} postId={id} />}
    </PostPageWrapper>
  );
}

export default PostPageContent;
