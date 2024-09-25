import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { FormLabel } from 'app/components/FormLabel';
import { Input } from '../Input';
import { QItem } from './QItem';

import { RepoErrorType } from './slice/types';
import { Select } from '../Select';
import Tag from '../Tag';
import { SubTitle } from '../SubTitle';

export function QuestionForm() {
  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  return (
    <Wrapper>
      <SubTitle>빠른 검색</SubTitle>
      <FormGroup onSubmit={onSubmitForm}>
        {/* <FormLabel>빠른 검색</FormLabel> */}
        <InputWrapper>
          <Select marginRight="5px">
            <option>전체</option>
            <option className="array">Array</option>
            <option>2</option>
            <option>3</option>
          </Select>
          <Input
            type="text"
            placeholder="문제 제목을 입력하세요."
            // value={username}
            // onChange={onChangeUsername}
          />
        </InputWrapper>
      </FormGroup>
      <List>
        <QItem
          key={'quest.id'}
          name={'quest.name'}
          starCount={0}
          url={'quest.html_url'}
        />
        <QItem
          key={'quest.id'}
          name={'quest.name'}
          starCount={0}
          url={'quest.html_url'}
        />
        <QItem
          key={'quest.id'}
          name={'quest.name'}
          starCount={0}
          url={'quest.html_url'}
        />
        <QItem
          key={'quest.id'}
          name={'quest.name'}
          starCount={0}
          url={'quest.html_url'}
        />
        <QItem
          key={'quest.id'}
          name={'quest.name'}
          starCount={0}
          url={'quest.html_url'}
        />
        <QItem
          key={'quest.id'}
          name={'quest.name'}
          starCount={0}
          url={'quest.html_url'}
        />
        <QItem
          key={'quest.id'}
          name={'quest.name'}
          starCount={0}
          url={'quest.html_url'}
        />
      </List>
    </Wrapper>
  );
}

export const repoErrorText = (error: RepoErrorType) => {
  switch (error) {
    case RepoErrorType.USER_NOT_FOUND:
      return 'There is no such user 😞';
    case RepoErrorType.USERNAME_EMPTY:
      return 'Type any Github username';
    case RepoErrorType.USER_HAS_NO_REPO:
      return 'User has no repository 🥺';
    case RepoErrorType.GITHUB_RATE_LIMIT:
      return 'Looks like github api`s rate limit(60 request/h) has exceeded 🤔';
    default:
      return 'An error has occurred!';
  }
};

const Wrapper = styled.div``;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Input} {
    width: ${100 / 3}%;
    margin-right: 0.5rem;
  }
`;

const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${FormLabel} {
    margin-bottom: 0.25rem;
    margin-left: 0.125rem;
  }
`;

const List = styled.div`
  height: 30vh; /* 높이를 30vh로 설정 */
  overflow-y: auto; /* 수직 스크롤 추가 */
  border: 0px solid #ccc; /* 경계선 추가 (선택 사항) */
  padding: 10px; /* 패딩 추가 (선택 사항) */

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 5px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* 스크롤바 트랙의 배경색 */
    border-radius: 10px; /* 트랙 모서리 둥글게 */
  }

  &::-webkit-scrollbar-thumb {
    background: #888; /* 스크롤바의 색상 */
    border-radius: 10px; /* 스크롤바 모서리 둥글게 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* 스크롤바에 마우스를 올렸을 때 색상 */
  }
`;
