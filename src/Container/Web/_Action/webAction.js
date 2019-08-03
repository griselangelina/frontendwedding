import axios from 'axios';

export const webAction = {
   getData
}

function getData(bridegroomcd){
    console.log("data",bridegroomcd)
    return dispatch => {
        axios.get(`/api/bridegroom/${bridegroomcd}`).then( 
            (response) => {
                //dispatch(confirmAction.saveData(response.data)) 
                dispatch(save(response.data)) 
            },
		);
         
    }
    function save(data) { return { type: 'SET_DETAIL_DATA',bridegroomdata:data} }
 }