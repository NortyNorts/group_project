import React from 'react';

const UserSelector = ({users, onUserSelected}) => {

    const handleChange = function(event) {
        const chosenUser = users[event.target.value];
        onUserSelected(chosenUser);
    }
    
    const userOptions = users.map((user, index) => {
      return <option value={index} key={index}>{user.Username}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a User</option>
            {userOptions}
        </select>
    )
}

export default UserSelector;