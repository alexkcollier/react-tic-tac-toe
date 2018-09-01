import React from 'react';
import cloneDeep from 'lodash.clonedeep';
import BoardGrid from './BoardGrid';
import BoardCell from './BoardCell';
import GameWinner from './GameWinner';
import ResetButton from './ResetButton';

export default class TheGame extends React.Component {
  constructor(props) {
    super(props);

    this.players = ['X', 'O'];

    this.initialState = {
      turn: this.players[0],
      winner: '',
      cells: [
        /* eslint-disable */
        { name: 1, value: '' }, { name: 2, value: '' }, { name: 3, value: '' },
        { name: 4, value: '' }, { name: 5, value: '' }, { name: 6, value: '' },
        { name: 7, value: '' }, { name: 8, value: '' }, { name: 9, value: '' },
        /* eslint-enable */
      ],
    };

    this.state = cloneDeep(this.initialState);
  }

  makeMove(cellName) {
    const { cells, turn: move } = this.state;
    const currentCell = cell => cell.name === cellName;
    const cellHasValue = arr => arr.find(currentCell).value;

    if (cellHasValue(cells)) return;

    // Avoid mutating the state directly
    const newCells = cloneDeep(cells);
    newCells.find(currentCell).value = move;

    // is there a winner?
    this.validateGame(newCells);

    // update
    this.setState({
      cells: newCells,
      turn: this.players.find(player => player !== move),
    });
  }

  // Check for three X/O in a row.
  validateGame(cells) {
    // it's possible for no one to win
    if (cells.every(cell => cell.value)) this.setState({ winner: 'No one' });

    // improvement: get validation arrays programmatically, and allow for larger boards
    const rows = [cells.slice(0, 3), cells.slice(3, 6), cells.slice(6)];

    const columns = [
      [cells[0], cells[3], cells[6]],
      [cells[1], cells[4], cells[7]],
      [cells[2], cells[5], cells[8]],
    ];

    const diagonals = [
      /* eslint-disable */
      [cells[0], cells[4], cells[8]],
      [cells[2], cells[4], cells[6]]
      /* eslint-enable */
    ];

    // does a player have 3 in a row?
    this.players.forEach(player =>
      [...rows, ...columns, ...diagonals].map(
        set => set.every(({ value }) => value === player) && this.setState({ winner: player })
      )
    );
  }

  resetGame() {
    this.setState(cloneDeep(this.initialState));
  }

  render() {
    const { cells, turn, winner } = this.state;

    const BoardCells = cells.map(cell => (
      // Using the arrow function avoids `.bind(this)` in constructor
      <BoardCell onClick={() => this.makeMove(cell.name)} cellValue={cell.value} key={cell.name} />
    ));

    return (
      <div style={{ textAlign: 'center' }}>
        {!winner ? <BoardGrid cells={BoardCells} turn={turn} /> : <GameWinner winner={winner} />}
        <ResetButton clickHandler={() => this.resetGame()} />
      </div>
    );
  }
}
