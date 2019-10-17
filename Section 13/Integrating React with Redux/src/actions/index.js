/**
 * Action Creator
 * @param {string} song 
 * @return {object}
 */
export const selectSong = (song) => {
    return {
        type:'SONG_SELECTED',
        payload:song
    };
};