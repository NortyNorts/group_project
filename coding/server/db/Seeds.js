use group_project;
db.dropDatabase();

db.ducks.insertMany([
    {
        DuckFact: "Females Mallards build nests in the ground and lay from 8 to 13 greenish-grayish eggs. Incubation period lasts 23 to 30 days.",
    },
    {
        DuckFact: "Mallard ducks can survive from 5 to 10 year in the wild, but they rarely live that long. Oldest known mallard duck died at the age of 27 years. ",
    },
    {
        DuckFact: "Mallard ducks find their mating partner in the autumn and live together until the spring, when mating season takes place. Females have only one mating partner, while males often mate with more than one female.",
    },
    {
        DuckFact: "Males and females are easily distinguished by the color of the plumage. Males have green heads, white collars and brown chests. The rest of the body is grayish. Almost entire body of females is covered with brown feathers except bluish-purple wings.",
    },
    {
        DuckFact: "Mallard ducks can reach 20 to 26 inches in length and up to 3 pounds of weight.",
    },
    {
        DuckFact: "All domestic species of ducks originate from mallard ducks.",
    },
    {
        DuckFact: "Mallard ducks rarely dive to find food. They usually consume plants and animals from the surface (or close to the surface) of the water. Mallard ducks also feed on the ground.",
    },
    {
        DuckFact: "Ducks are also called 'waterfowl' because they are normally found in places where there is water like ponds, streams, and rivers",
    },
    {
        DuckFact: "Ducks are outgoing, social animals who feel most at ease when they're in a larger group of other ducks.",
    },
    {
        DuckFact: "City ducks have different accents to rural ducks, typically louder (sound like Essex birds!)",
    },
    
]);

db.quiz.insertMany([

    {
        question:'Which of the following is true of Python dictionaries:', 
        options:[
        {id:1,answer: 'Dictionaries are accessed by key.'},
        {id:2,answer: 'A dictionary can contain any object type except another dictionary.'},
        {id:3,answer: 'All the keys in a dictionary must be of the same type'},
        {id:4,answer: 'Items are accessed by their position in a dictionary'}
                ],
        correctAnswer:1,
        link: 'https://www.w3schools.com/python/python_dictionaries.asp'
    },

    {
        question:'All keywords in Python are in _________', 
        options:[
        {id:1,answer: 'Capitalized'},
        {id:2,answer: 'lower case'},
        {id:3,answer: 'UPPER CASE'},
        {id:4,answer: 'None of the mentioned'}
                ],
        correctAnswer:4,
        link: 'https://www.w3schools.com/python/python_ref_keywords.asp'
    },

    {
        question:'Which of the following is used to define a block of code in Python language?', 
        options:[
        {id:1,answer: 'Indentation'},
        {id:2,answer: 'Key'},
        {id:3,answer: 'Brackets'},
        {id:4,answer: 'All of the mentioned'}
                ],
        correctAnswer:1,
        link: 'https://www.w3schools.com/python/gloss_python_indentation.asp'
    },

    {
        question:'Which of the following is the correct extension of the Python file?', 
        options:[
        {id:1,answer: 'python'},
        {id:2,answer: 'pl'},
        {id:3,answer: 'py'},
        {id:4,answer: 'p'}
                ],
        correctAnswer:3,
        link: 'https://fileinfo.com/extension/py#:~:text=A%20PY%20file%20is%20a,and%20other%20administrative%20computer%20systems.'
    },

    {
        question:'print("abc. DEF".capitalize())', 
        options:[
        {id:1,answer: 'Abc. def'},
        {id:2,answer: 'abc. def'},
        {id:3,answer: 'Abc. Def'},
        {id:4,answer: 'ABC. DEF'}
                ],
        correctAnswer:1,
        link: 'https://www.w3schools.com/python/ref_string_capitalize.asp'
    },

    {
        question:'Which of the following are true of Python dictionaries:', 
        options:[
        {id:1,answer: 'Items are accessed by their position in a dictionary.'},
        {id:2,answer: 'All the keys in a dictionary must be of the same type.'},
        {id:3,answer: 'A dictionary can contain any object type except another dictionary.'},
        {id:4,answer: 'Dictionaries are accessed by key.'}
                ],
        correctAnswer:4,
        link: 'https://www.w3schools.com/python/python_dictionaries.asp'
    },

    {
        question:'What is the correct way to create a function in Python?', 
        options:[
        {id:1,answer: 'def myFunction():'},
        {id:2,answer: 'create myFunction()'},
        {id:3,answer: 'function myFunction()'},
        {id:4,answer: 'def myFunction'}
                ],
        correctAnswer:1,
        link: 'https://www.w3schools.com/python/python_functions.asp'
    },

    {
        question:'Which method can be used to return a string in upper case letters?', 
        options:[
        {id:1,answer: 'upper()'},
        {id:2,answer: 'upperCase()'},
        {id:3,answer: 'toUpperCase()'},
        {id:4,answer: 'uppercase()'}
                ],
        correctAnswer:1,
        link: 'https://www.w3schools.com/python/ref_string_upper.asp'
    },

    {
        question:'Which operator can be used to compare two values?', 
        options:[
        {id:1,answer: '='},
        {id:2,answer: '=='},
        {id:3,answer: '<>'},
        {id:4,answer: '><'}
                ],
        correctAnswer:2,
        link: 'https://www.w3schools.com/python/python_operators.asp'
    },

    {
        question:'Which of these collections defines a LIST?', 
        options:[
        {id:1,answer: '{"apple", "banana", "cherry"}'},
        {id:2,answer: '("apple", "banana", "cherry")'},
        {id:3,answer: '["apple", "banana", "cherry"]'},
        {id:4,answer: '{"name": "apple", "color": "green"}'}
                ],
        correctAnswer:3,
        link: 'https://www.w3schools.com/python/python_lists.asp'
    }

] );

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