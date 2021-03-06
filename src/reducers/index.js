import { bindActionCreators } from "redux";
import { START_FETCH, FETCH_SUCCESS, FETCH_FAILED, ADD_SMURF, ADD_ERROR} from "../actions/index"
export const initialState = {
    smurfs: [],
    loading: false,
    error: '',
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case START_FETCH:
            return{...state, loading: true};
        case FETCH_SUCCESS:
            return{...state, loading: false, smurfs: action.payload};
        case FETCH_FAILED:
            return{...state, loading: false, error: "Request has failed!"};
        case ADD_SMURF:
            return{...state, smurfs: action.payload};
        case ADD_ERROR:
            return{...state, error: 'There was an error!'};
        default:
            console.log("Error: unkown action type in Index reducer")
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.