/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Div, Flex, Right, Span, Button } from '../components/styled/shared';
import { Header, Badge, HrThin } from '../components/styled/mixedIn';

import styled from 'styled-components';
import { getValue } from '../components/styled/Util';
import { color } from '../components/styled/Properties';

const Answer = styled(Div)`
  font-size: ${getValue(12)};
  line-height: ${getValue(18)};
  background-color: ${color.background};
  padding: ${getValue(10)} ${getValue(32)};
  border-bottom: 1px solid ${color.light};
`;

export default () => {
  return (
    <>
      <Div
        p={5}
        display="block"
        shadow
        bg="light"
        target="_blank"
        textAlign="center"
        as="a"
        href="http://bsmr.ezfarm.co.kr">
        zeplin
      </Div>
      <Flex fontSize="14" m={16}>
        <Div bold>
          총 <Span fg="green">41개</Span> 문의
        </Div>
        <Right>
          <Button bold bg="white" bc="light" pl={16} pr={16}>
            상품문의
          </Button>
        </Right>
      </Flex>

      <Div m={16}>
        <Div mb={7} fontSize={12}>
          몽고DB는 대용량 데이터를 처리할 수 있는 관계형 데이터베이스가 아닌
          SQL. 즉, NoSQL 오픈소스 데이터베이스다. 문서지향 데이터베이스여서
          스키마를 자주 변경해야 하는 대량의 데이터를 입력하는 상황에 최적화
          되어있는 게 특징이다. 개발에서 원하는 응답속도, 안정성을 지원하기
          때문에 빅데이터를 다루는 여러 회사가 몽고DB를 사용한다. 몽고DB
          데이터베이스 플랫폼은 7천만 회 이상 다운로드를 기록했으며, 100개국
          이상에 1만5천여명 이상의 고객을 보유하고 있다.
        </Div>
        <Flex fontSize={10} mb={10}>
          <Div fg="secondary">email:****@gmail.com | 2시간 전</Div>
          <Right>
            <Badge fg="white" bg="green">
              답변완료
            </Badge>
          </Right>
        </Flex>

        <HrThin />

        <Answer>
          <Div mb={4} fg="adjust">
            판매자 답변
          </Div>
          <Div mb={7}>
            국내 고객을 만나보면, 몽고DB를 안 쓰는 고객은 없더라. 그만큼 많이
            찾는 DB가 됐다. 만나는 고객은 오라클 DB가 비싼 만큼, 오라클 DB
            비용을 줄이기 위한 대안으로 몽고DB를 고려하고 있다
          </Div>
          <Div fontSize={10} fg="secondary">
            2시간 전
          </Div>
        </Answer>

        <Div m={16}>
          <Div mb={7} fontSize={12}>
            몽고DB는 공부한 만큼 효과를 보는 DB입니다. 숨어 있는 기능도 잘
            찾아서 써야 하지요. 다양한 API를 제공하더군요. 아직은 자료가 많지
            않지만 개발자는 드라이버마다 속성을 고려해서 어떤 드라이버를
            선택할지 고려했으면 합니다. 사실 몽고DB 뿐만 아니라 다른 DB도
            공부한만큼 보입니다.
          </Div>
          <Flex fontSize={10} mb={10}>
            <Div fg="secondary">email***@gmail.com</Div>
            <Right>
              <Badge fg="dark" bg="white" bc="light">
                대기
              </Badge>
            </Right>
          </Flex>

          <HrThin />
        </Div>
      </Div>
    </>
  );
};
