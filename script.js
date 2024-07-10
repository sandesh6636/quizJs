const quizData = [
  {
    question: "Which of the following is a client-side language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "b",
  },
  {
    question: "Which company developed JavaScript?",
    a: "Netscape",
    b: "Microsoft",
    c: "Sun Microsystems",
    d: "Oracle",
    correct: "a",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'app.js'?",
    a: "<script href='app.js'>",
    b: "<script name='app.js'>",
    c: "<script src='app.js'>",
    d: "<script file='app.js'>",
    correct: "c",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "msgBox('Hello World');",
    b: "alertBox('Hello World');",
    c: "msg('Hello World');",
    d: "alert('Hello World');",
    correct: "d",
  },
  {
    question: "Which of the following is not a programming language?",
    a: "Python",
    b: "HTML",
    c: "Java",
    d: "C++",
    correct: "b",
  },
  {
    question: "What does API stand for?",
    a: "Application Programming Interface",
    b: "Application Program Integration",
    c: "Application Program Interface",
    d: "Application Programming Integration",
    correct: "a",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    a: "<script>",
    b: "<style>",
    c: "<css>",
    d: "<link>",
    correct: "b",
  },
];

let index = 0;
let total = quizData.length;
let correct = 0;
let wrong = 0;
const questions = document.querySelector("#questionBox");
const options = document.querySelectorAll(".options"); //This gives nodelist so we use [] index this nodelist is similar to array but not array
// console.log(options);
// Load quesiton
const loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  } else {
    reset();
    const data = quizData[index];
    //   console.log(data);
    questions.innerHTML = `${index + 1}) ${data.question}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
  }
};

//quiz submit
const submitQuiz = () => {
  const data = quizData[index];
  const answer = getAnwer();
  if (answer == data.correct) {
    correct++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
};

const getAnwer = () => {
  let correctAnswer;
  options.forEach((input) => {
    if (input.checked) {
      //   console.log(input.value);
      //   return input.checked; this will return to that fuction only
      correctAnswer = input.value;
    }
  });
  return correctAnswer;
};

const reset = () => {
  options.forEach((input) => {
    if (input.checked) {
      input.checked = false;
    }
  });
};
const endQuiz = () => {
  document.querySelector("#box").innerHTML = `
     <h2>Thank You</h2>
     <h3> You scored ${correct} /${total}</h3> 
     `;
};
//Inital call
loadQuestion();
