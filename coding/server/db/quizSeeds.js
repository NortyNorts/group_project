use group_project;

db.quiz.insertMany([

    {
        question:'Which of the following are true of Python dictionaries:', 
        options:[
        {id:1,answer: 'Dictionaries are accessed by key.'},
        {id:2,answer: 'A dictionary can contain any object type except another dictionary.'},
        {id:3,answer: 'All the keys in a dictionary must be of the same type'},
        {id:4,answer: 'Items are accessed by their position in a dictionary'}
                ],
        correctAnswer:1
    },

    {
        question:'What is a question?', 
        options:[
        {id:1,answer: 'blue'},
        {id:2,answer: 'orange'},
        {id:3,answer: 'red'},
        {id:4,answer: 'green'}
                ],
        correctAnswer:2
    },

    {
        question:'What is life?', 
        options:[
        {id:1,answer: 'apple'},
        {id:2,answer: 'banana'},
        {id:3,answer: 'pear'},
        {id:4,answer: 'kiwi'}
                ],
        correctAnswer:3
    }
] );