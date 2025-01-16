let score = 0;
let currentQuestion = 0;

// تمامی سوالات جدول ضرب 1 تا 10
const allQuestions = [];
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        allQuestions.push({
            question: `${i} × ${j} =`,
            correctAnswer: i * j,
            options: generateOptions(i, j)
        });
    }
}

// تابع تولید گزینه‌ها به صورت تصادفی
function generateOptions(i, j) {
    const correctAnswer = i * j;
    const options = [correctAnswer];
    while (options.length < 4) {
        const randomOption = Math.floor(Math.random() * 100);
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }
    return options.sort(() => Math.random() - 0.5);
}

// انتخاب 10 سوال تصادفی از جدول ضرب
function getRandomQuestions() {
    let randomQuestions = [];
    while (randomQuestions.length < 10) {
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        if (!randomQuestions.includes(allQuestions[randomIndex])) {
            randomQuestions.push(allQuestions[randomIndex]);
        }
    }
    return randomQuestions;
}

// بارگذاری سوالات در صفحه
function loadQuestion() {
    const question = randomQuestions[currentQuestion];
    document.getElementById("question").innerText = question.question;

    const options = document.querySelectorAll(".option");
    options.forEach((button, index) => {
        button.innerText = question.options[index];
    // ارسال گزینه‌ها به صورت صحیح
    button.setAttribute('data-answer', question.options[index]);
});
}

// بررسی پاسخ
function checkAnswer(selectedButton) {
    const question = randomQuestions[currentQuestion];
    const feedback = document.getElementById("feedback");

    // خواندن گزینه انتخاب‌شده از دکمه‌ها
    const selected = parseInt(selectedButton.getAttribute('data-answer'));

    if (selected === question.correctAnswer) {
        score++; // افزایش امتیاز در صورت پاسخ درست
        feedback.innerText = "پاسخ درست! 😊";
    } else {
        feedback.innerText = "پاسخ اشتباه! 😞";
    }

    document.getElementById("score").innerText = "امتیاز: " + score;

    currentQuestion++;
    if (currentQuestion < randomQuestions.length) {
        setTimeout(loadQuestion, 1000); // تغییر سوال بعد از یک ثانیه
    } else {
        setTimeout(() => {
            document.getElementById("feedback").innerText = "پایان بازی! امتیاز نهایی: " + score;
        document.getElementById("score").innerText = "";
        // نمایش دکمه هدایت به صفحه جدید
        document.getElementById("nextGameButton").style.display = "block";
    }, 1000);
    }
}

// تابع هدایت به صفحه جدید
function goToNextPage() {
    window.location.href = "../game3/index.html"; // آدرس صفحه جدید
}

// شروع بازی و انتخاب سوالات تصادفی
const randomQuestions = getRandomQuestions();
loadQuestion();
