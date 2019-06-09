const initialState={
    isLoading:false,
    step:"TEMPLATE_LIST",
}
const listing = (state = initialState, action)=>{
    switch(action.type){

        case 'COMPOSE_INITIAL_STEP':
            return {
              ...state,
              step : "TEMPLATE_LIST"
            };
        case 'COMPOSE_NEXT':
            return {
              ...state,
              step:action.step
            };
        case 'COMPOSE_BACK':
            return {
              ...state,
              step:action.step
            };
        default:
            return state
    }

    
}

export default listing;