import React from 'react';
import styled from 'styled-components';
import TheGame from './TheGame';
import logo from './logo.svg';

const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    return (
      <Container>
        <h1>
          <img src={logo} alt="logo" />
          Tic-Tac-Toe
        </h1>
        <TheGame />
      </Container>
    );
  }
}
