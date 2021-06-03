import styled, { css } from 'styled-components';
import { color, activeColor } from '../Properties';
import { Div } from './Layouts';
import { getValue } from '../Util';
import * as cs from '../CoreStyles';

export const TriangleUp = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  ${(props) => `border-bottom: 7px solid ${color[props.bg] || color.green}`};
  ${cs.padding};
  ${cs.margin};
`;

export const TriangleDown = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  ${(props) => `border-top: 7px solid ${color[props.bg] || color.green}`};
  ${cs.padding};
  ${cs.margin};
`;
