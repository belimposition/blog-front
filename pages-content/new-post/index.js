import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Editor } from '@tinymce/tinymce-react'; 

import { createPost } from '@store/posts';

import Input, { InputField } from '@components/Input';
import Button from '@components/Button';


const NewPostPageContentWrapper = styled.div`
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

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
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


const NewPostPage = ({ className }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');


  const handleDescriptionChange = ({ target }) => {
    setDescription(target.getContent());
  };

  const handleContentChange = ({ target }) => {
    setContent(target.getContent());
  };

  
  const handleAddNewPost = () => {
    dispatch(createPost({ title, description, content }));
  }

  return (
    <NewPostPageContentWrapper className={className}>
      <Label htmlFor="titleForPost">Title</Label>
      <StyledInput
        type="text"
        name="title"
        id="titleForPost"
        onChange={(value) => setTitle(value)}
        isWithoutFocus
      />

      <EditorTitle>Description</EditorTitle>
      <StyledEditor
        initialValue='Краткое описание'
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
        initialValue='Полный текст'
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
        onClick={handleAddNewPost}
      >
        Опубликовать
      </StyledSendPostBtn>
    </NewPostPageContentWrapper>
  );
}

export default NewPostPage;
