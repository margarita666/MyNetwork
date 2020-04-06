import React from 'react';
import './Users.scss'

const Users = ({users, follow}) => {

 return(
   <div>{
    users.map(u => <div className="user" key={u.id}>
      <div className="user__item">
        <img src={u.avatar} className="user__ava"/>
        {u.isFollowed ? <button onClick={()=>{follow(u.id)}}>Unfollow</button> : <button>Follow</button>}
      </div>
      <div className="user__info">
        <div>
          <p>{u.fullName}</p>
          <p>{u.status}</p>
        </div>
        <div>
          <p>{u.location.counrty},</p> 
          <p>{u.location.city}</p>
        </div>
      </div>
      
      </div>)
     }
    </div>
 )
}

export default Users;
