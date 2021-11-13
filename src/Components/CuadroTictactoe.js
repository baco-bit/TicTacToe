import React from 'react';


function CuadroTictactoe(props){
    return(
        <div>
            <div className='btn' onClick={() => props.onClick()}>{props.value}</div>
        </div>
        )
}

export default CuadroTictactoe;
