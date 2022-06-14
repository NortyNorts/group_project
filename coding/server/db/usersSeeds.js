use group_project;

db.users.insertMany([
  {
    userName: "Adam",
    notes:{
            notes:[
                    {id: '1', text: "I'm Adam's first note", rotate: 12},
                    {id: '2', text: "I'm Adam's second note", rotate: 2},
                    {id: '3', text: "I'm Adam's thrid note", rotate: 8}
                  ]
          }
  },

  {
    userName: "Elin",
    notes:{
      notes:[
              {id: '1', text: "I'm Elin's first note", rotate: 12},
              {id: '2', text: "I'm Elin's second note", rotate: 2},
              {id: '3', text: "I'm Elin's thrid note", rotate: 8}
            ]
    }
  },
  {
    userName: "Cam",
    notes:{
      notes:[
              {id: '1', text: "I'm Cam's first note", rotate: 12},
              {id: '2', text: "I'm Cam's second note", rotate: 2},
              {id: '3', text: "I'm Cam's thrid note", rotate: 8}
            ]
    }
  },
  {
    userName: "Andy",
    notes:{
      notes:[
              {id: '1', text: "I'm Andy's first note", rotate: 12},
              {id: '2', text: "I'm Andy's second note", rotate: 2},
              {id: '3', text: "I'm Andy's thrid note", rotate: 8}
            ]
    }
  }
]);