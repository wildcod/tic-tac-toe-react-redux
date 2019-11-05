import React from 'react'
import Board from '../board/board'
import { connect } from 'react-redux'
import { handleClickAction,jumpToAction } from '../../redux/actions'
import './game.css'

class Game extends React.Component {
    
    handleClick(i) {
        // console.log('game',i)
        this.props.handleClickAction(i);
    }
    
    jumpTo(step) {
        this.props.jumpToAction(step)
    }
    
    render() {
        // console.log(this.props)
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    
    let status;
    if (winner) {
        status = "Winner: " + winner;
        } else {
        status = "Next player: " + (this.props.xIsNext ? "X" : "O");
        }
    
    return (
    <div className="game">
    <div className="game-board">
        <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
        <div>{status}</div>
        <button className="game-btn" onClick={() => this.jumpTo(this.props.stepNumber - 1)}>
             undo
        </button>
        
        <button className="game-btn" onClick={() => this.jumpTo(0)}>
        Reset
        </button>
        
        </div>
        </div>
    );
    }
    }

    const mapStateToProps = state => ({
        ...state.simpleReducer
       })
      
       const mapDispatchToProps = dispatch => ({
        // simpleAction: () => dispatch(simpleAction())
        handleClickAction : (i) => dispatch(handleClickAction(i)),
        jumpToAction : (step) => dispatch(jumpToAction(step))
       })

    export default connect(mapStateToProps,mapDispatchToProps)(Game);

    function calculateWinner(squares) {
        const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
        }
        return null;
        }