import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { deleteCommentById, setChangeComment } from '@store/posts';

const AVATAR_DEFAULT = '../../../static/images/avatar.jpg';

const CommentWrapper = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  border: none;
  margin: 0;
  margin-right: 16px;
  width: 35px;
  height: 35px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  margin-right: 8px;
  font-size: 16px;
  color: rgba(0,0,0,.87);
`;


const CreateDate = styled.div`
  margin-right: 8px;
  font-size: 14px;
  color: rgba(0,0,0,.4);
`;

const ChangeDate = styled.div`
  font-size: 14px;
  color: rgba(0,0,0,.4);
`;

const Message = styled.div`
  margin-bottom: 8px;
  color: rgba(0,0,0,.87);
  line-height: 20px;
  font-size: 16px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const ChangeComment = styled.button`
  margin-right: 16px;
  border: none;
  outline: none;
  font-size: 14px;
  color: rgba(0,0,0,.4);
  cursor: pointer;

  &:hover {
    color: rgba(0,0,0,.87);
  }
`;

const RemoveComment = styled.button`
  border: none;
  outline: none;
  font-size: 14px;
  color: rgba(0,0,0,.4);
  cursor: pointer;

  &:hover {
    color: rgba(0,0,0,.87);
  }
`;



const Comments = ({
 className,
 comment,
 postId,
}) => {
  const dispatch = useDispatch();

  const onRemoveCommentHandler = (commentId) => () => {
    dispatch(deleteCommentById({
      postId,
      commentId,
    }));
  }

  const onChangeCommentHandler = () => {
    dispatch(setChangeComment(comment));
  };

  return (
    <CommentWrapper className={className}>
      <Avatar src={comment.avatar || AVATAR_DEFAULT} />
      <Comment>
        <Header>
          <UserName>{comment.userName}</UserName>
          <CreateDate>Создан: {comment.createDate}</CreateDate>
          {comment.changeDate && <ChangeDate>Изменён: {comment.changeDate}</ChangeDate>}
        </Header>
        <Message>{comment.message}</Message>
        <Controls>
          <ChangeComment onClick={onChangeCommentHandler}>Редактировать</ChangeComment>
          <RemoveComment onClick={onRemoveCommentHandler(comment._id)}>Удалить</RemoveComment>
        </Controls>
      </Comment>
    </CommentWrapper>
  );
};

export default Comments;