import {combineReducers} from 'redux';
import listing from '../Container/Listing/_Reducer/listingReducer'
import bridegroomdetail from '../Container/Confirmation/_Reducer/confirmReducer'

const rootReducer = combineReducers({
    listing,bridegroomdetail
});

export default rootReducer;