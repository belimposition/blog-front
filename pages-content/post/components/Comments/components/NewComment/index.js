import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { sendNewComment, changeComment, setChangeComment } from '@store/posts';
import { getChangeComment } from '@store/posts/selectors';
import { getUserId, getUserName } from '@store/user/selectors'


import Button from '@components/Button';


const NewCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  margin: 0;
  margin-bottom: 16px;
  height: 142px;
  padding: 14px;
  background: #fff;
  border: 1px solid rgba(34,36,38,.15);
  outline: 0;
  color: rgba(0,0,0,.87);
  border-radius: 4px;
  box-shadow: 0 0 0 0 transparent inset;
  transition: color .1s ease,border-color .1s ease;
  font-size: 16px;
  line-height: 20px;
  resize: vertical;
`;

const StyledSendCommentBtn = styled(Button)``;



const NewComment = ({
 className,
 postId,
}) => {
  const dispatch = useDispatch();
  const changingComment = useSelector(getChangeComment);
  const authorId = useSelector(getUserId);
  const userName = useSelector(getUserName);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    if (changingComment && changingComment.message) {
      setNewComment(changingComment.message);
    }
  }, [changingComment]);

  useEffect(() => {
    if (newComment === '' && changingComment && changingComment.message) {
      dispatch(setChangeComment(null));
    }
  }, [newComment]);

  const sendCommentHandler = () => {
    dispatch(sendNewComment({
      postId,
      authorId,
      userName,
      message: newComment,
    }));

    setNewComment('');
  }

  const changeCommentHandler = () => {

    dispatch(changeComment({
      postId,
      authorId,
      comment: {
        ...changingComment,
        message: newComment,
      }
    }));

    setNewComment('');
  };

  return (
    <NewCommentWrapper className={className}>
      <Textarea
        value={newComment}
        onChange={(e) => setNewComment(e.currentTarget.value)}
      />
      <StyledSendCommentBtn
        theme='yellow'
        onClick={changingComment ? changeCommentHandler : sendCommentHandler}
      >
        {changingComment ? 'Изменить комментарий' : 'Добавить комментарий'}
      </StyledSendCommentBtn>
    </NewCommentWrapper>
  );
}

export default NewComment;