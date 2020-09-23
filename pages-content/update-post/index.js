import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Editor } from '@tinymce/tinymce-react'; 

import { updatePostById } from '@store/posts';
import { getPostById } from '@store/posts/selectors';

import Input, { InputField } from '@components/Input';
import Button from '@components/Button';


const UpdatePostPageContentWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  width: 960px;
`;

const Label = styled.label`
  flex-shrink: 0;
  font-size: 17px;
  line-height: 24px;
  width: 100px;
`;

const EditorTitle = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;
  flex-shrink: 0;
  font-size: 17px;
  line-height: 24px;
  width: 100px;
`;

const StyledInput = styled(Input)`
  flex-shrink: 0;
  height: 56px;
  width: 453px;
  margin-right: 24px;

  ${InputField} {
    font-size: 17px;
    line-height: 24px;

    ::placeholder {
      font-size: 17px;
      color: #a0a0a0;
    }
  }
`;

const StyledSendPostBtn = styled(Button)`
  margin-top: 32px;
  width: 300px;
  align-self: flex-end;

`;

const StyledEditor = styled(Editor)``;


const UpdatePostPage = ({ className, id }) => {
  const dispatch = useDispatch();

  const post = useSelector(getPostById(id));
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [content, setContent] = useState(post.content);


  const handleDescriptionChange = ({ target }) => {
    setDescription(target.getContent());
  };

  const handleContentChange = ({ target }) => {
    setContent(target.getContent());
  };

  
  const handleUpdatePost = () => {
    dispatch(updatePostById({ title, description, content, id }));
  }

  return (
    <UpdatePostPageContentWrapper className={className}>
      <Label htmlFor="titleForPost">Title</Label>
      <StyledInput
        type="text"
        name="title"
        id="titleForPost"
        value={title}
        onChange={(value) => setTitle(value)}
        isWithoutFocus
      />

      <EditorTitle>Description</EditorTitle>
      <StyledEditor
        initialValue={description}
        id='description'
        init={{
          height: 300,
          menubar: false,
          plugins: [
            'advlist autolink lists link image', 
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={handleDescriptionChange}
      />


      <EditorTitle>Content</EditorTitle>
      <StyledEditor
        initialValue={content}
        id='content'
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image', 
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={handleContentChange}
      />

      <StyledSendPostBtn
        theme='yellow'
        onClick={handleUpdatePost}
      >
        Обновить
      </StyledSendPostBtn>
    </UpdatePostPageContentWrapper>
  );
}

export default UpdatePostPage;
