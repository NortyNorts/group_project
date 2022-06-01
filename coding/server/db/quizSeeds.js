use group_project;

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
        link: 'www.1.com'
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
        link: 'www.2.com'
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
        link: 'www.3.com'
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
        link: 'www.4.com'
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
        link: 'www.5.com'
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
        link: 'www.6.com'
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
        link: 'www.7.com'
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
        link: 'www.8.com'
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
        link: 'www.9.com'
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
        link: 'www.10.com'
    }

] );