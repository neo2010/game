// آرایه‌ای از مراحل بازی، هر مرحله شامل چند تصویر و کلمه مرتبط است
const stages = [
    [ { src: 'img/download.png', word: 'سیب' }, { src: 'img/images (2).png', word: 'موز' } ],
    [ { src: 'img/images.jpg', word: 'گربه' }, { src: 'img/images5.png', word: 'سگ' } ],
    [ { src: 'img/images.png', word: 'فیل' }, { src: 'img/images (3).png', word: 'ماهی' } ],
    [ { src: 'img/images (1).png', word: 'زرافه' }, { src: 'img/images (4).png', word: 'اسب' } ],
    [ { src: 'img/images3.png', word: 'شیر' }, { src: 'img/images6.png', word: 'میمون' } ]
];

let currentStage = 0; // شماره مرحله جاری
let currentIndex = 0; // شماره تصویر جاری در مرحله

// دریافت المان‌های HTML
const imageElement = document.getElementById('image');
const optionsContainer = document.getElementById('options');
const messageElement = document.getElementById('message');

// صداهای پاسخ صحیح و نادرست
const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');

// نمایش تصویر و گزینه‌های مرتبط
function displayImage() {
    let stage = stages[currentStage]; // دریافت مرحله فعلی
    imageElement.src = stage[currentIndex].src; // نمایش تصویر
    optionsContainer.innerHTML = ''; // پاک کردن دکمه‌های قبلی

    // لیست کلمات مرحله فعلی را درهم می‌ریزیم
    const words = stage.map(item => item.word);
    words.sort(() => Math.random() - 0.5);

    // ایجاد دکمه برای هر کلمه
    words.forEach(word => {
        const button = document.createElement('button');
    button.innerText = word;
    button.onclick = () => checkAnswer(word); // هنگام کلیک بررسی پاسخ
    optionsContainer.appendChild(button);
});
}

// بررسی پاسخ کاربر
function checkAnswer(selectedWord) {
    if (selectedWord === stages[currentStage][currentIndex].word) {
        correctSound.play(); // پخش صدای صحیح
        messageElement.innerText = 'آفرین فرزندم! 🎉';
        setTimeout(nextImage, 1000); // رفتن به تصویر بعدی
    } else {
        wrongSound.play(); // پخش صدای غلط
        messageElement.innerText = 'اوه اوه اشتباه جواب دادی! ❌';
    }
}

// رفتن به تصویر بعدی در مرحله جاری
function nextImage() {
    let stage = stages[currentStage];
    if (currentIndex < stage.length - 1) {
        currentIndex++; // رفتن به تصویر بعدی
        messageElement.innerText = '';
        displayImage();
    } else {
        nextStage(); // رفتن به مرحله بعدی
    }
}

// رفتن به مرحله بعدی
function nextStage() {
    if (currentStage < stages.length - 1) {
        currentStage++; // رفتن به مرحله بعدی
        currentIndex = 0; // بازگشت به اولین تصویر در مرحله جدید
        messageElement.innerText = 'تصویر بعدی! 🚀';
        setTimeout(displayImage, 1000);
    } else {
        messageElement.innerText = 'آفرین همه مراحل با موفقیت پشت سر گذاشتی حالا برو مرحله بعد! 🎉';

        // نمایش دکمه برای هدایت به صفحه بعد
        document.getElementById('nextPageButton').style.display = 'block';
    }
}

// هدایت به صفحه بعدی
function goToNextPage() {
    window.location.href = '../game2/index.html'; // آدرس صفحه جدید را اینجا وارد کنید
}

// اجرای بازی از مرحله اول
displayImage();
