import React, { useState } from 'react';
import CuadroTictactoe from './CuadroTictactoe';


function BoardTictactoe() {

    const [cuadro, setCuadro] = useState(Array(9).fill(null));
    const [X, setX] = useState(true);

    const winner = calculateWinner(cuadro);
    let status;
    if (winner) {
        status = 'Ganador: ' + winner;
    } else {
        status = 'Turno de: ' + (X ? 'X' : 'O');
    }


    const renderCuadroTictactoe = (i) => {
        return (
            <CuadroTictactoe value={cuadro[i]} onClick={() => handleClick(i)} />
        )
    }

    const handleClick = (i) => {
        const cuadros = cuadro.slice();

        if (cuadros[i] === null) {
            cuadros[i] = X ? 'X' : 'O';
            setCuadro(cuadros);
            setX(!X);
        } else {
            alert('Dale reiniciar juego');
        }
    }

    function calculateWinner(cuadro) {
        const combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];
            if (cuadro[a] && cuadro[a] === cuadro[b] && cuadro[a] === cuadro[c]) {
                return cuadro[a];
            }
        }
        return null;
    }

    return (
        <div className='board'>
            <div className='status'>
                {status}
            </div>
            <div className='board-row'>
                {renderCuadroTictactoe(0)}
                {renderCuadroTictactoe(1)}
                {renderCuadroTictactoe(2)}
            </div>
            <div className='board-row'>
                {renderCuadroTictactoe(3)}
                {renderCuadroTictactoe(4)}
                {renderCuadroTictactoe(5)}
            </div>
            <div className='board-row'>
                {renderCuadroTictactoe(6)}
                {renderCuadroTictactoe(7)}
                {renderCuadroTictactoe(8)}
            </div>

            <div>
                <button id='reseteo' type="reset" onClick={() => { setCuadro(Array(9).fill(null)) }}>Reiniciar Juego</button>
            </div>
        </div>
    )
}

export default BoardTictactoe;