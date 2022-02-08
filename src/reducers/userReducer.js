import { DEMO_USER } from '../actions/types';

export default (state = {}, action) => {
	switch(action.type){
		case DEMO_USER:		
			return { ...state, user:action.payload};
        default:
            return state;    
    }
};
