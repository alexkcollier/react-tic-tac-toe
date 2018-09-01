import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: white;
  border: none;
  border-radius: 0.25em;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 10%);
  color: rgba(0, 0, 0, 60%);
  cursor: pointer;
  font-size: 1.25em;
  margin-top: 4rem;
  outline: none;
  padding: 0.5em 1em;
  transition: all 75ms ease-out;

  &:hover {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 5%), 0.125rem 0.125rem 1rem 0.25rem rgba(0, 0, 0, 10%);
    transform: scale(1.025);
  }
`;

export default function ResetButton({ clickHandler }) {
  return (
    <Button onClick={clickHandler} type="button">
      Reset
    </Button>
  );
}

ResetButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
