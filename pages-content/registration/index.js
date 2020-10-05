import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import Button from '@components/Button';
import Input, { InputField } from '@components/Input';

import { createUser } from '@store/user';

import {
  USER_NAME_MAX_LENGTH,
  PASSWORD_MAX_LENGTH,
  USER_MAIL_MAX_LENGTH,
} from '@constants/inputMaxLength';


const RegistrationPageContentWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
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
  width: 73px;
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

const StyledRegisterBtn = styled(Button)`
  margin-left: 73px;
  width: 453px;
`;


const RegistrationPageContent = ({ className }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUserHandler = () => {
    dispatch(createUser({
      name,
      email,
      password,
    }));
  }

  return (
    <RegistrationPageContentWrapper className={className}>
      <Row>
        <Label htmlFor="signInLoginInput">Имя</Label>
        <StyledInput
          type="text"
          name="name"
          id="nameInput"
          inputPlaceholder="Имя"
          onChange={setName}
          isWithoutFocus
          maxLength={USER_NAME_MAX_LENGTH}
        />
      </Row>

      <Row>
        <Label htmlFor="signInLoginInput">Email</Label>
        <StyledInput
          type="text"
          name="email"
          id="emailInput"
          inputPlaceholder="email"
          onChange={setEmail}
          isWithoutFocus
          maxLength={USER_MAIL_MAX_LENGTH}
        />
      </Row>

      <Row>
        <Label htmlFor="signInPasswordInput">Пароль</Label>
        <StyledInput
          id="passwordInput"
          name="password"
          type="password"
          autocomplete="on"
          onChange={setPassword}
          isWithoutFocus
          maxLength={PASSWORD_MAX_LENGTH}
        />
      </Row>

      <StyledRegisterBtn
        theme='yellow'
        onClick={createUserHandler}
      >
        Зарегистрироваться
      </StyledRegisterBtn>
    </RegistrationPageContentWrapper>
  );
}

export default RegistrationPageContent;
