function calculateResult() {
    const questions = [
        { answer: "A" },
        { answer: "A" },
        { answer: "C" },
        { answer: "B" },
        { answer: "C" }
    ];

    let correctAnswers = 0;

    for (let i = 1; i <= questions.length; i++) {
        const selectedAnswer = document.querySelector('input[name="answer' + i + '"]:checked');

        if (selectedAnswer && selectedAnswer.value === questions[i - 1].answer) {
            correctAnswers++;
        }
    }

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `Você acertou ${correctAnswers} de ${questions.length} perguntas.`;
}
