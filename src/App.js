import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { HrThin } from './components/styled/mixedIn';
import { Div, Link } from './components/styled/shared';
import Index from './pages/index';
import Profile from './pages/profile';

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
    padding: 1rem;
    margin-top:0;
    font-family:Verdana;
  }
`;

const Nav = styled(Div)`
  & a::after {
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
          </Nav>
          <HrThin />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
