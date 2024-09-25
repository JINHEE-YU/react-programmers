import React from 'react';
import { ReactComponent as StarIcon } from './QuestionForm/assets/star.svg';
import styled from 'styled-components';
const Badge = styled.div`
  /* width:15px;
  height:15px; */
  border-radius: 10%;
  background-color: #78b3e6 !important;
  margin: 5px;
  padding: 0px 3px;
  font-size: 0.75rem;
  font-weight: 500;
`;
export default function Tag({ cate }: { cate: string }) {
  return (
    <>
      {/* <StarIcon /> */}
      <Badge>{cate}</Badge>
    </>
  );
}
