export const confirmAction = {
    saveData
}

function saveData(data){
    console.log("data",data)
    return dispatch => {
        dispatch(save(data))  
    }
    function save(data) { return { type: 'SET_EDIT_DATA',bridegroomdata:data} }
 }