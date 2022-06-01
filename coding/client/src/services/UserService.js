const baseURL = 'http://localhost:9000/api/users/';

const UsersService = {
  getUsers() {
    return fetch(baseURL)
      .then(res => res.json());
  },


addSticky(newSticky, userId) {
  return fetch(baseURL+userId, {
    method: 'PATCH',
    body: JSON.stringify(newSticky),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
},

// updateSticky(user) {
//   return fetch(baseURL + booking._id, {
//     method: 'PUT',
//     body: JSON.stringify(user),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => res.json());
// },

deleteSticky(id) {
  return fetch(baseURL + id, {
    method: 'DELETE'
  });
}
}

export default UsersService;