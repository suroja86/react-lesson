import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './button';
import App from "./App";

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
        <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          history: history.concat([{
            squares: squares,
          }]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
        });
      }

      jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2 ) === 0,
        });
      }
  render() {
  const history = this.state.history;
  const curren = history[this.state.stepNumber];
  const winner = calculateWinner(curren.squares);

  const moves = history.map((step, move) => {
    let desc = move ? 'Move to # ' + move : 'Go to start';
    console.log('move: ' + move);
    //desc = (move == stepNumber) ? '<b>' + desc + '</b>' : desc;
    return (
    <tr key={move}>
        <td>{move}</td>
        <td><button onClick={() => this.jumpTo(move)}>{desc}</button></td>
    </tr>
    );
  });
  let status;
  if(winner) {
          status = 'Winner ' + winner;
      } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={curren.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
            <div>
                <Button
                    name="Увійти"
                    linearColorStop="#072468"
                    colorHint="#0F49D3"
                />
            </div>
            <div>
                <Button
                    name="Увійти через Google"
                    linearColorStop="#FE3030"
                    colorHint="#FE3030"
                />
            </div>
          <div>{status}</div>
          <table>{moves}</table>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}