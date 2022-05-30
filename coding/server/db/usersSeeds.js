use group_project;
db.dropDatabase();

db.users.insertMany([
  {
    userName: "Adam",
  },
  {
    userName: "Elin",
  },
  {
    userName: "Cam",
  },
  {
    userName: "Andy",
  }
]);