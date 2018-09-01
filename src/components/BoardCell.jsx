import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cell = styled.div`
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 5%), 0.125rem 0.125rem 1rem 0.125rem rgba(0, 0, 0, 10%);
  display: flex;
  font-size: 2em;
  font-weight: bold;
  height: 6rem;
  justify-content: center;
  transition: all 75ms ease-out;
  width: 6rem;

  ${({ active }) =>
    active &&
    `&:hover {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 5%), 0.125em 0.125em 1em 0.25em rgba(0, 0, 0, 10%);
    cursor: pointer;
    transform: scale(1.05);`}
  }
`;

export default function BoardCell(props) {
  const { cellValue, onClick } = props;

  return (
    <Cell active={!cellValue} onClick={onClick}>
      {cellValue}
    </Cell>
  );
}

BoardCell.propTypes = {
  cellValue: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

BoardCell.defaultProps = {
  cellValue: '',
};
