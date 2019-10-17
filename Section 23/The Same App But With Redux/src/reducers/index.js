import {combineReducers} from 'redux';

const defaultStateLanguage = 'english'

const switchLanguageReducer = (state = defaultStateLanguage,action) => {
    switch(action.type){
        case 'LANGUAGE_CHOSE':
            return state = action.payload;
        default:
       return state;
    }
};


export default combineReducers({
    language :  switchLanguageReducer
});