import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Router from 'next/router';

import { deletePostById } from '@store/posts';

import Link from '@components/Link';
import Button from '@components/Button';

import EditSvg from '@static/icons/edit.svg';
import RemoveSvg from '@static/icons/trash.svg';


const PostWrapper = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #000;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    transition: background-color .2s linear;
  }
`;

const TitleLink = styled(Link)`
  margin-bottom: 24px;
  font-size: 46px;
  line-height: 48px;
  color: #000;
`;

const Description = styled.div`
  font-size: 17px;
  line-height: 24px;
  color: #000;
  margin-bottom: 20px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
`;

const View = styled.div`
  margin-right: 16px;
  font-size: 14px;
  line-height: 20px;
  color: #000;
`;

const PostDate = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #000;
`;


const Controls = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  pointer-events: none;
  opacity: 0;
  transition: opacity .2s linear;
  z-index: 1;

  ${PostWrapper}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

const ControlBtn = styled(Button)`
  padding: 0;
  height: 40px;
  width: 40px;
  background-color: transparent;
  cursor: pointer;

  &:first-child {
    margin-right: 10px;
  }
`;

const StyledEditSvg = styled(EditSvg)`
  height: 24px;
  width: 24px;
`;

const StyledRemoveSvg = styled(RemoveSvg)`
  height: 24px;
  width: 24px;
`;


const Post = ({
  className,
  post,
}) => {
  const dispatch = useDispatch();

  const onUpdateHandler = () => {
    const routeTo = '/update-post/[id]';
    const routeAs = `/update-post/${post._id}`;
    Router.push(routeTo, routeAs);
  }

  const onRemoveHandler = () => {
    dispatch(deletePostById({ id: post._id }));
  }

  return (
    <PostWrapper className={className}>
      <TitleLink href={`/post/${post._id}`}>{post.title}</TitleLink>
      <Description dangerouslySetInnerHTML={{ __html: post.description }} />
      <Footer>
        <View>{post.view}</View>
        <PostDate>{post.postDate}</PostDate>
        <Controls>
          <ControlBtn onClick={onUpdateHandler}><StyledEditSvg /></ControlBtn>
          <ControlBtn onClick={onRemoveHandler}><StyledRemoveSvg /></ControlBtn>
        </Controls>
      </Footer>
    </PostWrapper>
  );
};

export default Post;
