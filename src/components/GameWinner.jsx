import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// quick and dirty keep things centered when someone wins
const Winner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  /* magic number based on BoardGrid (col * 3 + colGap * 2) */
  height: 22em;
  margin: 2em;
  /* magic number based on BoardGrid (row * 3 + rowGap * 2) */
  width: 22em;
`;

export default function GameWinner({ winner }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Game Over</h2>
      <Winner>
        <h1>{winner} wins!</h1>
      </Winner>
    </div>
  );
}

GameWinner.propTypes = {
  winner: PropTypes.string.isRequired,
};
