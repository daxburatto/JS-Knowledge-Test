
(function () {
        // start test function
var startTestEl = function () {

    // variable to store the HTML Output
    const output = []

    // for each question
    questionArray.forEach(
        (currentQuestion, questionNumber) => {
        // variable to store the list of possible answers
        const answers = []

        // and for each available answer
        for(letter in currentQuestion.answers){
            // add an HTML Radio button
            answers.push(
                `<label>
                    <input type="radio" name="questions${questionNumber}" value="$(letter"/>
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            )
        }
        output.push(
            `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join} </div>
            </div>`
        )  
    });
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('')

}

function showResults() {
    // gather all answers from test
    const answerContainer = quizContainer.querySelectorAll('.answers')
    
    // keep track of user's answers
    let numCorrect = 0

    // for each question
    questionArray.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainer[questionNumber]
        const selector = `input[name=question${questionNumber}]:checked`
        const userAnswer = (answerContainer.querySelector(selector) || {}).value 
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++
            // color the answers green
            answerContainer[questionNumber].style.color = 'light-green'
        } // If answer is wrong or blank 
        else {
            answerContainer[questionNumber].style.color = 'red'
        }
    })
}

// bring question[0] and answers[0} to front
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide')
    slides[n].classList.add('active-slide')
    currentSlide = n
    if (currentSlide === 0) {
        previousButton.style.display = 'none'
    } else {
        previousButton.style.display = 'inline-block'
    }
    if (currentSlide === slides.length-1) {
        nextButton.style.display = 'none'
        submitButton.style.display = 'inline-block'
    } else {
        nextButton.style.display = 'inline-block'
        submitButton.style.display = 'none'
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1)
}

function showPreviousSlide() {
    showSlide(currentSlide - 1)
}

const resultsContainer = document.getElementById("results")
const quizContainer = document.querySelector("#page-content")
const questionArray = [
    {
        question: "Who Invented JavaScript?",
        answers: {
            a:"Douglas Crockford",
            b:"Sheryl Sandberg",
            c:"Brendan Eich",
            d:"Starbucks",
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a Javascript package manager?",
        answers: {
            a:"Node.Js",
            b:"TypeScript",
            c:"npm",
            d:"google",
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality",
        answers: {
            a:"Angular",
            b:"jQuery",
            c:"RequireJS",
            d:"ESLint",
        },
        correctAnswer:"d"
    },
    {
        question:"Why do JavaScript and Java have such similar names?",
        answers: {
            a:"JS is a stripped down Java",
            b:"JS syntax is loosely based on Java's",
            c:"They both originated on the island of Java",
            d:"None of the above",
        },
        correctAnswer:"b"
    },
    {
        question:"When a user views a page containing JS, which machine actually executes the script?",
        answers: {
            a:"The user's machine running a web browser",
            b:"The web server",
            c:"A central machine deep within Netscape's corporate office",
            d:"None of the above",
        },
        correctAnswer:"a"
    },
    {
        question:"____ Javascript is also called client-side Javascript",
        answers: {
            a:"Microsoft",
            b:"Navigator",
            c:"LiveWire",
            d:"Native",
        },
        correctAnswer:"b"
    },
    {
        question:"____ Javascript is also called server-side Javascript",
        answers: {
            a:"Microsoft",
            b:"Navigator",
            c:"LiveWire",
            d:"Native",
        },
        correctAnswer:"c"
    },
    {
        question:"What are variables use for in JS?",
        answers: {
            a:"Storing numbers, dates, or other values",
            b:"Varying randomly",
            c:"Causing high-school algebra flashbacks",
            d:"None of the above",
        },
        correctAnswer:"a"
    },
    {
        question:"Which of the following can't be done with client-side JS?",
        answers: {
            a:"Validating a form",
            b:"Sending a form's contents by email",
            c:"Storing the form's contents to a database file on the server",
            d:"None of the above",
        },
        correctAnswer:"c"
    },
    {
        question:"Which of the following are capabilities of functions in JS",
        answers: {
            a:"Return a value",
            b:"Accept parameters and Return a value",
            c:"Accept parameters",
            d:"None of the above",
        },
        correctAnswer:"c"
    },
    {
        question:"Which of the following is not a valid JS variable name?",
        answers: {
            a:"2names",
            b:"_first_and_last_names",
            c:"FirstAndLast",
            d:"None of the above",
        },
        correctAnswer:"a"
    },
    {
        question:"How does JS store dates in a date object?",
        answers: {
            a:"The number of milliseconds since January 1st, 1970",
            b:"The number of days since January 1st, 1900",
            c:"Month, Day, Year",
            d:"None of the above",
        },
        correctAnswer:"a"
    },
    {
        question:"Which types of image maps can be used with JS",
        answers: {
            a:"Server-side image maps",
            b:"Client-side image maps",
            c:"Server-side image maps and Client-side image maps",
            d:"None of the above",
        },
        correctAnswer:"b"
    },
    {
        question:"If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
        answers: {
            a:"'New Text'",
            b:"para1.value='New Text'",
            c:"para1.firstChild.nodeValue='New Text'",
            d:"para1.nodeValue='New Text'",
        },
        correctAnswer:"b"
    },
    {
        question:"Which of the following best describes Javascript?",
        answers: {
            a:"a low-level programming language",
            b:"a scripting language pre-compiled in the browser",
            c:"a compiled scripting language",
            d:"an object-oriented scripting language",
        },
        correctAnswer:"d"
    },
]

startTestEl()

const startButton = document.getElementById("start-test")
const previousButton = document.getElementById("previous")
const nextButton = document.getElementById("next")
const submitButton = document.getElementById("submit")
const slides = document.getElementById(".slide")
let currentSlide = 0

showSlide(currentSlide)

// click start button, test starts over
startButton.addEventListener("click", startTestEl)
// go back a question
previousButton.addEventListener("click", showPreviousSlide)
// go forward a question
nextButton.addEventListener("click", showNextSlide)
// show results
submitButton.addEventListener("click", showResults)
})