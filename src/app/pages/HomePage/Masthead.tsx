import * as React from 'react';
import styled from 'styled-components/macro';
// import { Logos } from './Logos';
import { Title } from 'app/components/Title';
import { Lead } from 'app/components/Lead';
// import { A } from 'app/components/A';
export function Masthead() {
  return (
    <Wrapper>
      <Title>알고리즘 학습</Title>
      <Lead>학습한 알고리즘 문제 및 풀이를 작성해둔 저장소</Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`;
