import React from 'react';
import styled from 'styled-components';
import { Lead } from '../Lead';
// import { Lead } from '../Lead';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function QItem() {
  return (
    <Box>
      <div>
        <Lead>첫번째</Lead>
      </div>
      <div>
        <Lead>두번째</Lead>
      </div>
    </Box>
  );
}
