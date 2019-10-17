import _ from 'lodash';
import jsonPlaceholder from './../apis/jsonPlaceholder';
/**
 * Action Creator
 * @param {string} type 
 * @param {array} payload 
 * @return {object}
 */


 export const fetchPostsAndUsers = () => async (dispatch,getState) => {
      await  dispatch(fetchPosts());
    const {posts} = getState(),
           userIds = _.map(posts,'userId'),
           uniqueUserIds = _.uniq(userIds);

    uniqueUserIds.forEach(id => {
       dispatch(fetchUser(id));
    })
 }



export const fetchPosts =  () => 
 async  dispatch => {
     const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type:'FETCH_POSTS',
        payload:response.data
    });
    }
 

export const fetchUser = (id) =>  async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({
            type:'FETCH_USER',
            payload:response.data
        });
    }


// import _ from 'lodash';
// export const fetchUser = (id) => dispatch =>   _fetchUser(id,dispatch);
// const _fetchUser = _.memoize( async (id,dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//             dispatch({
//             type:'FETCH_USER',
//             payload:response.data
//         });
// });
