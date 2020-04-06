import { connect } from 'react-redux';
import Users from './Users';
import { unfollowAC, followAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToPrors = (state) => {
  return {users: state.usersPage.users}
};
let mapDispachToProps = (dispatch) => {
  return {
    follow:(userId) => {
      let action = followAC(userId);
      dispatch(action)
    },
    unfollow:(userId) => {
      let action = unfollowAC(userId);
      dispatch(action)
    },
    setUsers:(users)=> {
      let action = setUsersAC(users);
      dispatch(action)
    }
  }
};

const UsersContainer = connect(mapStateToPrors, mapDispachToProps) (Users)

export default UsersContainer