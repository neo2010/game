
let currentQuestion = 0;
const questions = [
    {
        question: "سوال 1: مساحت مثلثی با قاعده ۶ و ارتفاع ۴ را حساب کنید.",
        options: [12, 18, 24, 10],
        answer: 12,
        image: "https://salamsch.org/wp-content/uploads/2024/07/%D9%82%D8%A7%D8%B9%D8%AF%D9%87-%D9%88-%D8%A7%D8%B1%D8%AA%D9%81%D8%A7%D8%B9-%D9%85%D8%AB%D9%84%D8%AB-1024x638.webp"
    },
    {
        question: "سوال 2: محیط دایره‌ای با شعاع ۷ را حساب کنید (عدد پی = 3.14).",
        options: [44, 49, 35, 24],
        answer: 44,
        image: "https://rayad.org/wp-content/uploads/2020/06/1-min.jpg"
    },
    {
        question: "سوال 3: مساحت مستطیلی با طول ۸ و عرض ۵ را حساب کنید.",
        options: [30, 40, 50, 25],
        answer: 40,
        image: "https://salamsch.org/wp-content/uploads/2024/08/%D8%AA%D8%B9%D8%B1%DB%8C%D9%81-%D9%85%D8%B3%D8%AA%D8%B7%DB%8C%D9%84-1-1024x638.webp"
    },
    {
        question: "سوال 4: مساحت یک دایره با شعاع ۱۰ را محاسبه کنید (عدد پی = 3.14).",
        options: [314, 220, 150, 50],
        answer: 314,
        image: "https://rayad.org/wp-content/uploads/2020/06/1-min.jpg"
    },
    {
        question: "سوال 5: مساحت یک مربع با ضلع ۵ را حساب کنید.",
        options: [20, 25, 30, 35],
        answer: 25,
        image: "https://www.beytoote.com/images/stories/scientific/calculate-square-area-1.jpg"
    }
];

let userScore = 0;

function startQuiz() {
    document.getElementById("quiz").innerHTML = `
        <h2>${questions[currentQuestion].question}</h2>
        <img src="${questions[currentQuestion].image}" alt="سوال تصویری" class="question-image"/>
        <div class="question-options">
            ${questions[currentQuestion].options.map((option, index) => `
                <button onclick="checkAnswer(${index})">${option}</button>
            `).join('')}
        </div>
    `;
}

function checkAnswer(selectedIndex) {
    if (questions[currentQuestion].options[selectedIndex] === questions[currentQuestion].answer) {
        userScore++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        startQuiz();
    } else {
        showReport();
    }
}

function showReport() {
    document.getElementById("reportDetails").innerHTML = `
        <h3>نتیجه آزمون</h3>
        <p>امتیاز شما: ${userScore} از ${questions.length}</p>
    `;
    document.getElementById("report").style.display = 'block';
}

function startDuel() {
    alert("شروع بازی دوئل!");
}
