const quizBank = {
  "personal-banking": [
    {
      question: "Which account is best for daily spending",
      options: ["Checking account", "Savings account", "Certificate of deposit"],
      answer: "Checking account",
    },
    {
      question: "What happens when you use a debit card",
      options: [
        "Money leaves your checking account right away",
        "You borrow money and pay later",
        "You earn interest on purchases",
      ],
      answer: "Money leaves your checking account right away",
    },
    {
      question: "Why is budgeting helpful",
      options: [
        "It helps you plan spending and saving",
        "It increases your credit limit",
        "It lowers tax rates",
      ],
      answer: "It helps you plan spending and saving",
    },
    {
      question: "What is one way to avoid bank fees",
      options: [
        "Keep track of your balance",
        "Ignore your account rules",
        "Spend more than you have",
      ],
      answer: "Keep track of your balance",
    },
    {
      question: "Interest on savings means",
      options: [
        "The bank pays you for keeping money there",
        "You pay the bank every month",
        "You can spend more than your balance",
      ],
      answer: "The bank pays you for keeping money there",
    },
  ],
  "employment-taxes": [
    {
      question: "Which job type usually includes steady hours and benefits",
      options: ["Full time", "Part time", "Self employed"],
      answer: "Full time",
    },
    {
      question: "Net pay is",
      options: [
        "What you take home after deductions",
        "Your hourly wage before taxes",
        "A bonus added to your paycheck",
      ],
      answer: "What you take home after deductions",
    },
    {
      question: "FICA funds",
      options: ["Social Security and Medicare", "School lunches", "State parks"],
      answer: "Social Security and Medicare",
    },
    {
      question: "A progressive tax system means",
      options: [
        "Higher income faces higher tax rates",
        "Everyone pays the same rate",
        "Taxes only apply to bonuses",
      ],
      answer: "Higher income faces higher tax rates",
    },
    {
      question: "A tax refund is",
      options: [
        "Your own money coming back",
        "Extra money the government gives you",
        "A fee for filing",
      ],
      answer: "Your own money coming back",
    },
  ],
};

const pickRandom = (items, count) => {
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const renderQuiz = (quizEl) => {
  const quizId = quizEl.dataset.quiz;
  const questionWrap = quizEl.querySelector(".quiz-questions");
  const questionBank = quizBank[quizId] || [];
  const questions = pickRandom(questionBank, Math.min(3, questionBank.length));

  questionWrap.innerHTML = "";

  questions.forEach((item, index) => {
    const questionCard = document.createElement("div");
    questionCard.className = "quiz-question";

    const title = document.createElement("p");
    title.className = "quiz-title";
    title.textContent = `Question ${index + 1}: ${item.question}`;

    const options = document.createElement("div");
    options.className = "quiz-options";

    item.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = option;
      button.addEventListener("click", () => {
        options.querySelectorAll(".quiz-option").forEach((btn) => {
          btn.disabled = true;
          btn.classList.remove("is-correct", "is-wrong");
        });
        if (option === item.answer) {
          button.classList.add("is-correct");
        } else {
          button.classList.add("is-wrong");
        }
      });
      options.appendChild(button);
    });

    questionCard.appendChild(title);
    questionCard.appendChild(options);
    questionWrap.appendChild(questionCard);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quiz-card").forEach((quizEl) => {
    renderQuiz(quizEl);
    const refresh = quizEl.querySelector(".quiz-refresh");
    if (refresh) {
      refresh.addEventListener("click", () => renderQuiz(quizEl));
    }
  });
});
