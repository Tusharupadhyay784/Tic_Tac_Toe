import React, { useEffect, useState } from 'react'
const pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const Box = ({ changeValue, val }) => {
    return (
        <div onClick={changeValue}>{val}</div>
    )
}
const board = () => {
    const [player, setPlayer] = useState('O');
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    useEffect(() => {
        WinnerPerson(board);
    }, [board])
    const TriggerPlayer = () => {
        setPlayer(player === 'O' ? 'X' : 'O');
    }
    const chooseValue = (value) => {
        console.log("X")
        setBoard(board.map((val, idx) => {
            if (idx == value && val === "") {
                TriggerPlayer();
                return player;
            }
            else {
                return val;
            }
        }))
        WinnerPerson(board);
    }
    const WinnerPerson = (matrix) => {
        let winner = false;
        for (let i = 0; i < pattern.length; i++) {
            if (matrix[pattern[i][0]] == matrix[pattern[i][1]] && matrix[pattern[i][1]] == matrix[pattern[i][2]] && matrix[pattern[i][0]] != "") {
                // winner = matrix[pattern[i][0]];
                winner = true;
            }
        }
        if (winner == true)
            setTimeout(() => {
                alert(player === 'X' ? 'Player O Wins' : 'Player X Wins');
            }, 1000);


    }
    const ResetGame = () => {
        setBoard(["", "", "", "", "", "", "", "", "",])
        setPlayer("O");
    }
    return (
        <div className='container'>
            <div className="board">
                <Box changeValue={() => chooseValue(0)} val={board[0]} />
                <Box changeValue={() => chooseValue(1)} val={board[1]} />
                <Box changeValue={() => chooseValue(2)} val={board[2]} />
            </div>
            <div className="board">
                <Box changeValue={() => chooseValue(3)} val={board[3]} />
                <Box changeValue={() => chooseValue(4)} val={board[4]} />
                <Box changeValue={() => chooseValue(5)} val={board[5]} />
            </div>
            <div className="board">
                <Box changeValue={() => chooseValue(6)} val={board[6]} />
                <Box changeValue={() => chooseValue(7)} val={board[7]} />
                <Box changeValue={() => chooseValue(8)} val={board[8]} />
            </div>
            <br />
            <button onClick={() => ResetGame()}>Reset</button>

        </div>
    )
}

export default board