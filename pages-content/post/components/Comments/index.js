import React from 'react';
import styled from 'styled-components';

import Comment from './components/Comment';
import NewComment from './components/NewComment';


const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 16px;
  padding-bottom: 8px;
  font-size: 24px;
  color: rgba(0,0,0,.87);
  border-bottom: 1px solid rgba(34,36,38,.15);
`;

const StyledComment = styled(Comment)`
  margin-bottom: 16px;
`;

const StyledNewComment = styled(NewComment)`
  margin-bottom: 16px;
`;




const Comments = ({
 className,
 comments = [],
 postId,
}) => {

  return (
    <CommentsWrapper className={className}>
      <Title>Комментарии</Title>
      {comments.map(comment => <StyledComment key={comment._id} comment={comment} postId={postId} />)}
      <StyledNewComment postId={postId} />
    </CommentsWrapper>
  );
}

export default Comments;