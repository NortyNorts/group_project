const baseURL = 'http://localhost:9000/api/users/';

const UsersService = {
  getUsers() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  updateStickies(updatedStickies, id) {
    delete updatedStickies.lastNoteCreated
    return fetch(baseURL + id, {
      method: 'PATCH',
      body: JSON.stringify({notes:updatedStickies}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

}

export default UsersService;