const questions = [
    {
        question: 'What is the purpose of sustainable road development?',
        options: [
            {
                option: 'To increase traffic congestion',
                correct: false
            },
            {
                option: 'To reduce carbon emissions',
                correct: true
            },
            {
                option: 'To increase waste during construction',
                correct: false
            },
            {
                option: 'To reduce pavement life',
                correct: false
            }
        ]
    },
    {
        question: 'What are some benefits of sustainable roads?',
        options: [
            {
                option: 'Increased carbon emissions',
                correct: false
            },
            {
                option: 'Increased traffic congestion',
                correct: false
            },
            {
                option: 'Improved air quality',
                correct: true
            },
            {
                option: ' Increased future maintenance requirements',
                correct: false
            }
        ]
    },
    {
        question: 'What is NOT a challenge in building sustainable roads?',
        options: [
            {
                option: 'Reducing waste during construction',
                correct: false
            },
            {
                option: 'Incorporating more asphalt content',
                correct: true
            },
            {
                option: 'Extending pavement life',
                correct: false
            },
            {
                option: 'Balancing environmental concerns with economic considerations',
                correct: false
            }
        ]
    },
    {
        question: 'What is an example of a sustainable road project?',
        options: [
            {
                option: 'Building more airports',
                correct: false
            },
            {
                option: 'Shortening of roads for increased traffic',
                correct: false
            },
            {
                option: 'Using materials such as asphalt and concrete',
                correct: false
            },
            {
                option: 'Planting trees along highways to reduce pollution',
                correct: true
            }
        ]
    },
    {
        question: 'What is the purpose of sustainable road maintenance?',
        options: [
            {
                option: 'To maintain roads in a way that is eco-friendly',
                correct: true
            },
            {
                option: 'To increase the environmental impact of road maintenance',
                correct: false
            },
            {
                option: 'To promote unsustainable development',
                correct: false
            },
            {
                option: 'To reduce the lifespan of roads',
                correct: false
            }
        ]
    }
]

const questionEl = document.querySelector('.question');
const optionsEl = [...document.querySelectorAll('.option')];
const resultEl = document.querySelector('.result');
const endscoreEl = document.querySelector('.end-result > .score');
const quiztitleEl = document.querySelector('.quiz-title');

const thankEl = document.querySelector('.end');

let thankClicked = false;
thankEl.addEventListener('click', () => {
    if (!thankClicked) {
        thankEl.querySelector('h1').innerHTML = 'Now Clap';
        thankClicked = true;
    } else {
        thankEl.querySelector('h1').innerHTML = 'Thank You';
        thankClicked = false;
    }
})

let quiz = true;

for (let i = 0; i < optionsEl.length; i++) {
    optionsEl[i].addEventListener('click', () => {
        if (quiz) {
            guess(i);
        }
    });
}

const optionsElold = optionsEl[0].style.display;
const questionElold = questionEl.style.display;
const resultElold = resultEl.style.display;

const clear = () => {
    for (let i = 0; i < optionsEl.length; i++) {
        optionsEl[i].style.display = 'none';
    }
    questionEl.style.display = 'none';
    resultEl.style.display = resultElold;
}

const show = () => {
    for (let i = 0; i < optionsEl.length; i++) {
        optionsEl[i].style.display = optionsElold;
    }
    questionEl.style.display = questionElold;
    resultEl.style.display = 'none';
}

const letters = ['A', 'B', 'C', 'D'];

let i = 0;
let correctIndex = 0;
let correctAnswers = 0;
const newQuestion = () => {
    if (i < questions.length) {
        const currentquestion = questions[i];
        questionEl.innerHTML = `${i + 1}) ${currentquestion['question']}`;

        for (let j = 0; j < optionsEl.length; j++) {
            optionsEl[j].innerHTML = `${letters[j]}) ${currentquestion['options'][j]['option']}`;
            if (currentquestion['options'][j]['correct']) {
                correctIndex = j;
            }
        }
    } else {
        quiz = false;
        resultEl.style.display = 'none';
        quiztitleEl.innerHTML = 'End'
        endscoreEl.innerHTML = `You got ${correctAnswers} out of ${questions.length} answers correct (${Math.floor(100 / questions.length * correctAnswers)}%)`;
    }
    i++;
}
newQuestion();

const guess = (guessIndex) => {
    if (guessIndex == correctIndex) {
        resultEl.innerHTML = 'Correct';
        correctAnswers++;
    } else {
        resultEl.innerHTML = 'Incorrect';
    }
    clear();
    setTimeout(() => {
        newQuestion();
        if (quiz) {
            show();
        }
    }, 1500);
}