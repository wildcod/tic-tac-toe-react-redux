import React from 'react'
import './squares.css'

function Squares(props){
    return (
        <div>
            <button
               className="square"
               onClick={props.onClick}
            >
                {props.value}
            </button>
        </div>
    )
}

export default Squares