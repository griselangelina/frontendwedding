const initialState={
    isLoading:false,
    data:{
    },
}
const bridegroomdetail = (state = initialState, action)=>{
    switch(action.type){

        case 'SET_EDIT_DATA':
            return {
              ...state,
              data : action.bridegroomdata
            };
        
        default:
            return state
    }

    
}

export default bridegroomdetail;