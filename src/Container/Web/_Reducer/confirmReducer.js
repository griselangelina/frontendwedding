const initialState={
    isLoading:false,
    data:{
    },
}
const bridegroomdetail2 = (state = initialState, action)=>{
    switch(action.type){
        
        case 'SET_DETAIL_DATA':
            return {
              ...state,
              data : action.bridegroomdata
            };
        
        default:
            return state
    }

    
}

export default bridegroomdetail2;