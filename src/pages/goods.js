import React from 'react';
import {
  Div,
  Right,
  Flex,
  Span,
  Button,
  Fixed,
} from '../components/styled/shared';
import { getValue } from '../components/styled/Util';
import { color } from '../components/styled/Properties';

import styled, { css } from 'styled-components';

const SortHeader = styled(Flex)`
  margin: ${getValue(16)} ${getValue(20)};
`;

const SortItemBox = styled(Flex)`
  cursor: pointer;
  margin-left: auto;
  align-items: center;
  font-size: ${getValue(16)};
  & > div:last-child {
    border-right: 0;
    padding-right: 0;
  }
`;

const SortItem = styled(Flex)`
  color: ${color.dark}
  padding-right: ${getValue(12)}
  line-height: ${getValue(14)}
  display: flex;
  align-items: center;
  & > div:nth-child(2) {
    padding-left: ${getValue(6)}
  }
  ${(props) =>
    !props.noLine &&
    css`
    &::after {
      content: ""
      display: inline-block;
      width: ${getValue(1)}
      height: ${getValue(14)}
      background-color: ${color.light}
      margin-left: ${getValue(12)}
    }
  `}
`;

export default function Goods() {
  return (
    <>
      <SortHeader>
        <Div fontSize={18} bold>
          <Span fg="green">42개</Span> 상품
        </Div>
        <SortItemBox>
          <SortItem>
            <Div>예약상품</Div>
          </SortItem>
        </SortItemBox>
      </SortHeader>

      <Fixed top={80} width="100%" height="100vh" bg="dark">
        <Div bg="white" pt={22 - 19 / 2} pb={22 - 19 / 2}>
          <Div
            cursor
            fontSize={16}
            fg="green"
            bold
            p={19 / 2}
            textAlign="center">
            전체보기
          </Div>
          <Div cursor fontSize={16} fg="dark" p={19 / 2} textAlign="center">
            기본채소
          </Div>
          <Div cursor fontSize={16} fg="dark" p={19 / 2} textAlign="center">
            쌈/샐러드/간편채소
          </Div>
          <Div cursor fontSize={16} fg="dark" p={19 / 2} textAlign="center">
            브로콜리/특수채소
          </Div>
        </Div>
      </Fixed>
    </>
  );
}
