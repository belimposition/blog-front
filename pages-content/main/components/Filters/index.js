import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';

import { getIsAuth } from '@store/user/selectors';


import Button from '@components/Button';

const FILTERS = [
  {
    id: 'all',
    title: 'Весь список',
  },
  {
    id: 'my',
    title: 'Мои посты'
  },
  {
    id: 'my-favorite',
    title: 'Из моих подписок'
  },
  {
    id: 'popular',
    title: 'Самые популярные сейчас'
  },
];

const ACTIVE_FILTER = 'all';

const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0,0,0, .3);
`;

const FilterTag = styled(Button)`
  margin-right: 16px;
  padding: 8px;
  height: 40px;

  ${({ isActive }) => isActive && css`
    background: #FFF3DA;
    pointer-events: none;
  `}
`;


const Filters = ({
  className,
}) => {
  const isAuth = useSelector(getIsAuth);

  if (!isAuth) { return null };
  const activeFilter = ACTIVE_FILTER;

  const filterTagHandler = (id) => () => {
    console.log(`${id} filter is active now`);
  }

  return (
    <FiltersWrapper className={className}>
      {FILTERS.map(item => (
        <FilterTag
          onClick={filterTagHandler(item.id)}
          key={item.id}
          isActive={activeFilter === item.id}
        >
          {item.title}
        </FilterTag>
      ))}
    </FiltersWrapper>
  )
};

Filters.displayName = 'Filters';

export default Filters;
