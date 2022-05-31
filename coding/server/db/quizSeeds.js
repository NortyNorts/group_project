use group_project;

db.quiz.insertMany([

    {question:'Which of the following are true of Python dictionaries:', 
        options:[
        {id:1,answer: 'Dictionaries are accessed by key.', isCorrect: true},
        {id:2,answer: 'A dictionary can contain any object type except another dictionary.', isCorrect: false},
        {id:3,answer: 'All the keys in a dictionary must be of the same type', isCorrect: false},
        {id:4,answer: 'Items are accessed by their position in a dictionary', isCorrect: false}
                ]
    },

    {question:'What is a question?', 
        options:[
        {id:1,answer: 'blue', isCorrect: false},
        {id:2,answer: 'orange', isCorrect: true},
        {id:3,answer: 'red', isCorrect: false},
        {id:4,answer: 'green', isCorrect: false}
                ]
    },

    {question:'What is life?', 
        options:[
        {id:1,answer: 'apple', isCorrect: false},
        {id:2,answer: 'banana', isCorrect: false},
        {id:3,answer: 'pear', isCorrect: true},
        {id:4,answer: 'kiwi', isCorrect: false}
                ]
    }
] );