import * as React from 'react';
import styled from 'styled-components/macro';
// import { Logos } from './Logos';
import { Title } from 'app/components/Title';
import { Lead } from 'app/components/Lead';
import { Input } from 'app/components/Input';
// import { A } from 'app/components/A';

export function Masthead() {
  return (
    <Wrapper>
      <Title>알고리즘 학습</Title>
      <Lead>학습한 알고리즘 문제 및 풀이를 작성해둔 저장소</Lead>
      <Input
        type="text"
        placeholder="문제 제목을 입력하세요."
        value={''}
        onChange={() => {}}
      />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
`;
