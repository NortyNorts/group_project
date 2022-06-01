use group_project;

db.users.insertMany([
  {
    userName: "Adam",
    notes: {notes: [{id: '1', text: "I'm the first note", rotate: 12}]}
    
  },
  {
    userName: "Elin",
    notes: []
  },
  {
    userName: "Cam",
    notes: []
  },
  {
    userName: "Andy",
    notes: []
  }
]);