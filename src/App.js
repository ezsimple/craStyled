import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { HrThin } from './components/styled/mixedIn';
import { Div, Link } from './components/styled/shared';
import Profile from './pages/profile';
import './App.css';

const Nav = styled(Div)`
  & a:after {
    margin: 10000;
  }
`;

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

const theme = {
  colors: {
    primary: '#fafafa',
  },
};

function App() {
  return (
    <div className="App">
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
            <Route exact path="/" component={this} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
