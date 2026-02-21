/* CLG Last Year - Relatable Quiz JavaScript */

// Relatable Quiz Questions (Hinglish Style!)
const quizQuestions = [
    {
        question: "Teacher ka 'Abhi exam mein aate hain' scene? 😰",
        options: [
            "Chill, mujhe toh aata hai! 😎",
            "*Heartbeat increases* 😱",
            "Notes dekho, kuch na kuch ho jayega! 📝",
            "Dost se baat karo, distraction chahiye! 🙈"
        ],
        correct: 1
    },
    {
        question: "Teacher ne poocha aur answer nahi aata? 😅",
        options: [
            "Sochta reh gaya, kuch nahi aaya! 😵",
            "Niche dekho, phone dekho! 📱",
            "'Ma'am, question repeat kar dijiye!' 🙏",
            "Dost ko help mangta hu! 🙋"
        ],
        correct: 0
    },
    {
        question: "Attendance 75% se kam ho gaya? 📊",
        options: [
            "Chill hai, late aane se upar ho jayega! 😏",
            "Dost se sign karwaunga! 🙈",
            "Ma'am se bollunga, please! 🙏",
            "Koi nahi, next year dobara! 🎓"
        ],
        correct: 1
    },
    {
        question: "Teacher ka 'Notes copy kar rahe ho' aana? 👀",
        options: [
            "Dekho, dekho, kuch nahi ho raha! 😬",
            "Notes taali se sorry maangta hu! 🙏",
            "Dost ko blame karo! 😈",
            "Act normal, nothing happened! 😎"
        ],
        correct: 1
    },
    {
        question: "Lecture mein phone ka notification aaya? 📱",
        options: [
            "Dekho zaroor, teacher kya karega! 😏",
            "Fhandke phone rakho! 😤",
            "Silent mode mein tha, koi nahi dekha! 🙈",
            "Message ka reply dena zaroori hai! 💬"
        ],
        correct: 3
    },
    {
        question: "Exam mein copy karne ka try? 📝",
        options: [
            "Nahi, main toh honest hoon! 😇",
            "Dekho aur seekho, master ho gaya! 😎",
            "Achha score ke liye kuch bhi! 🙈",
            "Teacher ki aankh se door baitho! 👀"
        ],
        correct: 1
    },
    {
        question: "Teacher ka 'Beta, zyada confident mat ho' bolna? 🤓",
        options: [
            "Ma'am, main toh topper hoon! 🏆",
            "*Silence* 🙈",
            "Sir, meri taraf se sorry! 🙏",
            "Kya bolna hai, samjha nahi! 😕"
        ],
        correct: 1
    },
    {
        question: "Assignment last date pe submit karna? 📅",
        options: [
            "Hamesha pehle se ready! ✅",
            "Raat 2 baje banaota hu! 🌙",
            "Submit karne ka mood nahi! 😴",
            "Dost se share karunga! 😂"
        ],
        correct: 1
    },
    {
        question: "Teacher ki lecture mein interest? 😴",
        options: [
            "Full focus, 100% attention! 👀",
            "So jaata hoon, kya karein! 😴",
            "Phone chalaota rahta hoon! 📱",
            "Drawing banata hoon! ✏️"
        ],
        correct: 1
    },
    {
        question: "Final exam ka result aaya? 📊",
        options: [
            "Abe, fail ho gaya! 😱",
            "Pass toh ho gaya, par marks? 😅",
            "Expectations ke hisaab se nahi aaya! 😤",
            "Next year ke liye try again! 🎓"
        ],
        correct: 0
    }
];

// Result messages based on score
const resultMessages = [
    { min: 0, max: 30, emoji: "🤡", title: " Tu To Pure CLG Ka Joker Hai!", message: "Tera toh last year bakwas se gaya! Class fail ho gaya kya? 😂" },
    { min: 31, max: 50, emoji: "😏", title: "Thoda Relate Hua, Par Nahi Full!", message: "Kuch toh yaad hai, par zyada nahi! Dobara try kar! 😅" },
    { min: 51, max: 70, emoji: "🙂", title: "Bhai, Tu To Zinda Legend Hai!", message: "Bas thoda aur effort leta toh topper ban jata! 😎" },
    { min: 71, max: 85, emoji: "🔥", title: " Kitna Relate Ho Raha Hai!", message: "Tera toh pura last year yaad hai! Hero hai tu! 🏆" },
    { min: 86, max: 100, emoji: "👑", title: "Yaar Tu To Pure CLG Ka King Hai!", message: "Tere jaise students hi legends bante hain! Tu toh 100% relatable hai! 👑" }
];

// Quiz state
let currentQuestion = 0;
let score = 0;
let studentName = "";

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    createFloatingElements();
    createStars();
    createParticles();
});

// Create floating elements (books, caps, etc.)
function createFloatingElements() {
    const container = document.getElementById('floatingElements');
    const elements = ['📚', '🎓', '✏️', '📱', '🎮', '🍕', '🎉', '💪'];
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'floating-element';
            el.textContent = elements[Math.floor(Math.random() * elements.length)];
            el.style.left = Math.random() * 100 + '%';
            el.style.top = Math.random() * 100 + '%';
            el.style.animationDuration = (8 + Math.random() * 4) + 's';
            el.style.animationDelay = Math.random() * 2 + 's';
            el.style.fontSize = (1.5 + Math.random()) + 'em';
            container.appendChild(el);
            
            setTimeout(() => {
                el.remove();
                createFloatingElement();
            }, 12000);
        }, i * 500);
    }
}

function createFloatingElement() {
    const container = document.getElementById('floatingElements');
    const elements = ['📚', '🎓', '✏️', '📱', '🎮', '🍕', '🎉', '💪'];
    const el = document.createElement('div');
    el.className = 'floating-element';
    el.textContent = elements[Math.floor(Math.random() * elements.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.top = '100%';
    el.style.animationDuration = (8 + Math.random() * 4) + 's';
    el.style.fontSize = (1.5 + Math.random()) + 'em';
    container.appendChild(el);
    
    setTimeout(() => {
        el.remove();
        createFloatingElement();
    }, 12000);
}

// Create stars with magical glow
function createStars() {
    const container = document.getElementById('stars');
    const starSymbols = ['⭐', '✨', '🌟', '💫', '✦'];
    
    for (let i = 0; i < 25; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${0.8 + Math.random() * 1.5}em;
            animation: twinkle ${2 + Math.random() * 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            filter: drop-shadow(0 0 ${5 + Math.random() * 10}px rgba(254, 202, 87, 0.8));
        `;
        star.textContent = starSymbols[Math.floor(Math.random() * starSymbols.length)];
        container.appendChild(star);
    }
    
    // Add twinkling and magical glow animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.3) rotate(180deg); }
        }
        .floating-element {
            position: absolute;
            animation: floatAround 10s ease-in-out infinite;
            filter: drop-shadow(0 0 10px rgba(255, 107, 107, 0.5));
        }
        @keyframes floatAround {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(20px, -30px) rotate(90deg); }
            50% { transform: translate(0, -60px) rotate(180deg); }
            75% { transform: translate(-20px, -30px) rotate(270deg); }
        }
    `;
    document.head.appendChild(style);
}

// Create particles
function createParticles() {
    const container = document.getElementById('particles');
    
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${3 + Math.random() * 4}px;
            height: ${3 + Math.random() * 4}px;
            background: radial-gradient(circle, rgba(255, 107, 107, 0.8) 0%, transparent 70%);
            border-radius: 50%;
            animation: particleFloat ${4 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        container.appendChild(particle);
    }
    
    // Add particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Start the quiz
function startRelating() {
    const nameInput = document.getElementById('studentName');
    studentName = nameInput.value.trim();
    
    if (!studentName) {
        alert('Bhai, naam toh likh de pehle! 😂');
        return;
    }
    
    // Hide input section, show quiz
    document.querySelector('.input-section').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    
    // Update total questions
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    
    // Show first question
    showQuestion();
}

// Show current question
function showQuestion() {
    const question = quizQuestions[currentQuestion];
    
    document.getElementById('questionNumber').textContent = currentQuestion + 1;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
}

// Handle option selection
function selectOption(optionIndex) {
    const question = quizQuestions[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    // Check if correct
    if (optionIndex === question.correct) {
        buttons[optionIndex].classList.add('correct');
        score += 10;
    } else {
        buttons[optionIndex].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
    }
    
    // Wait and move to next question
    setTimeout(() => {
        currentQuestion++;
        
        if (currentQuestion < quizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

// Show result
function showResult() {
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
    
    const relateScore = (score / (quizQuestions.length * 10)) * 100;
    const finalScore = score;
    const correctAnswers = score / 10;
    
    // Find appropriate message
    let resultData = resultMessages[0];
    for (let r of resultMessages) {
        if (relateScore >= r.min && relateScore <= r.max) {
            resultData = r;
            break;
        }
    }
    
    // Update result elements
    document.getElementById('resultBadge').textContent = resultData.emoji;
    document.getElementById('resultTitle').textContent = resultData.title;
    document.getElementById('resultMessage').textContent = resultData.message;
    
    // Animate score
    animateScore(0, Math.round(relateScore));
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('finalScore').textContent = finalScore;
    
    // Create celebration
    createCelebration();
}

// Animate score
function animateScore(start, end) {
    const scoreElement = document.getElementById('relateScore');
    let current = start;
    const increment = end / 20;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        scoreElement.textContent = Math.round(current);
    }, 50);
}

// Create celebration effect
function createCelebration() {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    document.body.appendChild(container);
    
    const emojis = ['🎉', '🎊', '⭐', '🔥', '💥', '🎓', '📚', '🏆'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            el.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: -50px;
                font-size: ${1.5 + Math.random() * 2}em;
                animation: celebrateFall ${2 + Math.random() * 2}s linear forwards;
            `;
            container.appendChild(el);
            
            setTimeout(() => el.remove(), 4000);
        }, i * 40);
    }
    
    // Add celebration animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes celebrateFall {
            0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg) scale(0.3); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => container.remove(), 5000);
}

// Restart quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    
    document.getElementById('resultSection').style.display = 'none';
    document.querySelector('.input-section').style.display = 'block';
    document.getElementById('studentName').value = '';
}
