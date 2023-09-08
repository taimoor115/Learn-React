import React from 'react'

const UserCard = (props) => {

  console.log(props.data);

  return (
    <div className='user-card'>
        <img />
        <h3>{props.data.name.first}</h3>
        <p>{props.data.phone}</p>
        <p>{props.data.location.city}, {props.data.location.state}</p>
    </div>
  )
}

export default UserCard
