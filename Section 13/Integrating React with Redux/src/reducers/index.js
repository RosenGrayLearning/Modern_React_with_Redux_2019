import {combineReducers} from 'redux';

/**
 * Reducer songReducer
 * @return {Array}
 */
 const songReducer = () => {
    return [
        {title:'No Scrubs',duration:'4:05'},
        {title:'Macrena',duration:'2:30'},
        {title:'All Star',duration:'3:15'},
        {title:'I Want it That Way',duration:'1:45'}
    ];
};

/**
 * Reducer selectedSongReducer
 * @param {String} selectedSong
 * @param {Object} action
 * @return {String}
 */
 const selectedSongReducer = (selectedSong = null,action) => {
    if(action.type === 'SONG_SELECTED'){
       return action.payload
    }

    return selectedSong;
};

export default combineReducers({
    songs : songReducer,
    selectedSong : selectedSongReducer
});