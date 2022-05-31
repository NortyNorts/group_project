const baseURL = 'http://localhost:9000/api/quiz/';

const QuizService = {
  getQuiz() {
    return fetch(baseURL)
      .then(res => res.json());
  },

}

export default QuizService;