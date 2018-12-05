import React from "react";
import Board from "../Board/Board";

class Game extends React.Component{
    constructor(props){
        super(props);

        this.state={
            history:[{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0
        };
    }

    calculateWinner(player, squares){
        if (squares[0]===player && squares[1]===player && squares[2]===player) return player;
        if (squares[3]===player && squares[4]===player && squares[5]===player) return player;
        if (squares[6]===player && squares[7]===player && squares[8]===player) return player;
        if (squares[0]===player && squares[3]===player && squares[6]===player) return player;
        if (squares[1]===player && squares[4]===player && squares[7]===player) return player;
        if (squares[2]===player && squares[5]===player && squares[8]===player) return player;
        if (squares[0]===player && squares[4]===player && squares[8]===player) return player;
        if (squares[2]===player && squares[4]===player && squares[6]===player) return player;
        return null;
    }

    clickHandler(pos){
        const history=this.state.history.slice(0, this.state.stepNumber+1);
        const current=history[history.length-1];
        const squares=current.squares.slice();

        let winner=this.calculateWinner("X", squares) || this.calculateWinner("O", squares);
        if (winner){
            return;
        }

        var xIsNext=null;

        if (squares[pos]===null){
            if (this.state.xIsNext){
                squares[pos]="X";
                xIsNext=false;
            }
            else{
                squares[pos]="O";
                xIsNext=true;
            }
            this.setState({
                history: history.concat([{
                    squares: squares
                }]),
                xIsNext: xIsNext,
                stepNumber: history.length,
            });
        }

    }

    gameEnd(squares){
        let gameKiSesh=squares.some((item)=>{
            return item===null;
        });

        if (gameKiSesh) return false;
        else return true;
    }

    render() {
        const history=this.state.history;
        const current=history[this.state.stepNumber];
        console.log("----------------    "+ current.squares);
        const winner=(this.calculateWinner("X", current.squares)|| this.calculateWinner("O", current.squares));

        const moves=history.map((item, index)=>{
            const dekhao= index? "go back to move # "+index : "go to game start";
            return(
                <li key={index}
                    className="list-group-item"
                >
                    <button className="btn btn-info" onClick={()=>{this.jumpTo(index)}}>{dekhao}</button>
                </li>
            );
        });

        let status;
        if (winner){
            status="Winner: "+(this.state.xIsNext? "O" : "X");
        }
        else{
            status="Next Player: "+(this.state.xIsNext? "X" : "O");
        }

        if (this.gameEnd(current.squares) && !winner){
            status="Draw Game...";
        }

        return(
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i)=>{this.clickHandler(i)}}
                    />
                </div>
                <div className="game-info">
                    <div className="Status py-3"><h4 className="text text-success">{status}</h4></div>
                    <ul className="list-group">{moves}</ul>
                </div>
            </div>
        );
    }

    jumpTo(index) {
        this.setState({
            stepNumber: index,
            xIsNext: (index%2===0)? true: false,
        });
    }
}

export default Game;