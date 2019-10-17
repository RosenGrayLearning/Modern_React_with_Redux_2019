
const defaultState = [];

export default (state = defaultState,action) => {
     switch(action.type){
         case 'FETCH_POSTS':
             return action.payload;
         default:
        return state;
     }
}