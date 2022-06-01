import React, {useState} from "react"

const Header = (({users, setCurrentUser, setCurrentUserStickes})=>{

    const handleChange = function(event){
        const chosenUser = users[event.target.value]
        onUserSelected(chosenUser)
    }

    const usersList = users.map((user, index) =>{
        return<option value={index} key={index}>{user.userName}</option>
    })
    
    const onUserSelected = function(user){
        setCurrentUser(user)
        setCurrentUserStickes(user.notes)
    }

    return(
        <>
            <select defaultValue="" onChange={handleChange}>
                <option value="" selected>Select User</option>
            {usersList}
            </select>
        </>
    )
})

export default Header