
export const handleClickAction = (i) => (dispatch) => {
    console.log(i)
    dispatch({
        type : 'HANDLE_CLICK',
        payload : {
            value : i
        }
    })
} 


export const jumpToAction = (step) => dispatch => {
    console.log(step)
    dispatch({
        type : 'JUMP',
        payload : {
            step
        }
    })
} 