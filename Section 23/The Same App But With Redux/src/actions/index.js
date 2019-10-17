/**
 * Action Creator
 * @param {string} language 
 * @return {object}
 */

 export const switchLanguage = (language) =>{
     return {
         type:'LANGUAGE_CHOSE',
         payload:language
     }
 }