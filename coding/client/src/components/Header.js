import React, {useState} from "react"
import '../css/user.css'

const Header = (({users})=>{
    
    const [selectedUser, setSelectedUser] = useState(null)

    const handleChange = function(event){
        const chosenUser = users[event.target.value]
        onUserSelected(chosenUser)
    }

    const usersList = users.map((user, index) =>{
        return<option value={index} key={index}>{user.userName}</option>
    })
    
    const onUserSelected = function(user){
        setSelectedUser(user)
    }

    return(
        <>
            <select defaultValue="" onChange={handleChange} className="drop-down" >
                <option value="" selected>Select User</option>
            {usersList}
            </select>
        </>
    )
})

export default Header