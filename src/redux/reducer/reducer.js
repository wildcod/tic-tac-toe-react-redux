
const initialState = {
  history: [
    {
     squares: Array(9).fill(null)
    }
    ],
    stepNumber: 0,
    xIsNext: true
}


export default (state = initialState, action) => {
    switch (action.type) {
     case 'HANDLE_CLICK':
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[action.payload.value]) {
          return state;
        }

        squares[action.payload.value] = state.xIsNext ? "X" : "O";
       
      return {
        ...state,
        history: history.concat([
          {
          squares: squares
          }
          ]),
          stepNumber: history.length,
          xIsNext: !state.xIsNext
      }
     case 'JUMP' : 
     if (action.payload.step === -1){
          return state;
      }
         return {
           ...state,
          stepNumber: action.payload.step,
          xIsNext: action.payload.step % 2 === 0
         } 
     default:
      return state
    }
   }




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
