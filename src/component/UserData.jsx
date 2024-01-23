import React from 'react'
import styled from 'styled-components'

function UserData({user}) {
    console.log(user)
    return (
        <UserInfo>
            <img src={user.photoURL} alt={user.displayName}/>
            <span>{user.displayName}</span>
        </UserInfo>
    )
}

export default UserData

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    img{
        width: 36px;
        border-radius: 100%;
    }
`