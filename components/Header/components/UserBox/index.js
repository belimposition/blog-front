import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { getIsAuth } from '@store/user/selectors';

import Link from '@components/Link'
import Button from '@components/Button';

const UserBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledLink = styled(Link)`
  margin-right: 16px;
`;

const LogoutBtn = styled(Button)``;


const UserBox = ({
  className,
}) => {
  const isAuthUser = useSelector(getIsAuth);

  const logoutHandler = () => { console.log('logout'); };
  const loginHandler = () => { console.log('login'); };

  return (
    <UserBoxWrapper className={className}>
      {isAuthUser && <StyledLink href='/new-post'>+ Добавить пост</StyledLink>}
      {isAuthUser && <LogoutBtn onClick={logoutHandler}>Выйти</LogoutBtn>}

      {!isAuthUser && <StyledLink href='/login'>Авторизоваться</StyledLink>}
    </UserBoxWrapper>
  )
}

UserBox.displayName = 'UserBox';

export default UserBox;
