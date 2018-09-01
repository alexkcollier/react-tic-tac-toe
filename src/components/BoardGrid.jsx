import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-template: repeat(3, min-content) / repeat(3, min-content);
  margin: 2em;
`;

export default function BoardGrid(props) {
  const { cells, turn } = props;

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Your turn, {turn}.</h2>
      <Grid>{cells}</Grid>
    </div>
  );
}

BoardGrid.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.node).isRequired,
  turn: PropTypes.string.isRequired,
};
