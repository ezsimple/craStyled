import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { HrThin } from './components/styled/mixedIn';
import { Div, Link } from './components/styled/shared';
import Index from './pages/index';
import Profile from './pages/profile';
import Video from './pages/video';
import Question from './pages/question';
import Goods from './pages/goods';
import Category from './pages/category';

import 'antd/dist/antd.css';

// ---------------------------------------------------------
// createGlobalStyle 에서 antd.css의 스타일을 변경할 수 있다.
// ---------------------------------------------------------
const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    background: #F5F4F0;
    display:block;
    height: 100%;
    max-width: 640px;
    margin:0 auto;
    padding: 0;
  }

  body{
    background-color:#fafafa;
    min-height:100vh;
    font-family: Verdana;
    padding: 0;
    margin: 0;
  }
`;

const Nav = styled(Div)`
  & a::before {
    padding-left: 5px;
    content: '|';
  }
  & a:first-child::before {
    content: '';
  }
`;

const theme = {
  colors: {
    primary: '#fafafa',
  },
};

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Nav>
            <Link bg="white" to="/">
              홈
            </Link>
            <Link bg="white" to="/profile">
              프로파일
            </Link>
            <Link bg="white" to="/video">
              비디오
            </Link>
            <Link bg="white" to="/question">
              질문
            </Link>
            <Link bg="white" to="/goods">
              상품
            </Link>
            <Link bg="white" to="/category">
              카테고리
            </Link>
          </Nav>
          <HrThin />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/question" component={Question} />
            <Route exact path="/goods" component={Goods} />
            <Route exact path="/category" component={Category} />
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
