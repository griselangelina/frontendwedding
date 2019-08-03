import {combineReducers} from 'redux';
import listing from '../Container/Listing/_Reducer/listingReducer'
import bridegroomdetail from '../Container/Confirmation/_Reducer/confirmReducer'
import bridegroomdetail2 from '../Container/Web/_Reducer/confirmReducer'

const rootReducer = combineReducers({
    listing,bridegroomdetail,bridegroomdetail2
});

export default rootReducer;