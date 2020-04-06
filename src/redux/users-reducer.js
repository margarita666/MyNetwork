const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    {id: 1, fullName:'Rita', location: { counrty: 'Ukraine', city: 'Kanev' }, status: `Hi, I'm juniour`, isFollowed: true,
  avatar:'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png'},
    {id: 1, fullName:'Dima', location: { counrty: 'England', city: 'London' }, status: `Hi, I'm juniour too`, isFollowed: true,
  avatar:'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png'},
    {id: 1, fullName:'Helen', location: { counrty: 'Ukraine', city: 'Poltava' }, status: `Hi, I'm juniour too`, isFollowed: false,
  avatar:'https://www.pikpng.com/pngl/m/80-805523_default-avatar-svg-png-icon-free-download-264157.png'},
  ], 
}

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:{
      return {
        ...state,
        users: state.users.map ((user) => {
          if(user.id === action.userId) {
            return {
              ...user, 
              isFollowed: true}            
          }
          return user;
        },)
      }
    }

    case UNFOLLOW:{
      return {
        ...state,
        users: state.users.map((user) => {
          if(user.id === action.userId) {
            return {
              ...user,
              isFollowed: false}
          }
          return user
        })
      }
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    }
    default: 
      return state
  }
  
}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => (
  {type: UNFOLLOW, userId}
)
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer