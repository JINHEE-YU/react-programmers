import * as React from 'react';
import styled from 'styled-components/macro';
// import { Logos } from './Logos';
import { Input } from 'app/components/Input';
import { Select } from 'app/components/Select';
import { QList } from 'app/components/QList';
// import { A } from 'app/components/A';

const SearchBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
`;
export function Searchhead() {
  return (
    <Wrapper>
      <SearchBox>
        <Select marginRight="5px">
          <option>전체</option>
          <option>2</option>
          <option>3</option>
        </Select>
        <Input
          type="text"
          placeholder="문제 제목을 입력하세요."
          value={''}
          onChange={() => {}}
        />
      </SearchBox>
      <QList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
