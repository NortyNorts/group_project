const baseURL = 'http://localhost:9000/api/users/';

const UsersService = {
  getUsers() {
    return fetch(baseURL)
      .then(res => res.json());
  },

}

export default UsersService;