const questions = [
  "_____ is the largest animal ever known to have lived on earth.",
  "_____, often called sea cows, are herbivorous marine mammals.",
  "The _____ is known for its complex songs that can last for hours.",
  "_____ are known for their playful behavior and are found in all the world's oceans.",
  "_____ are notable for their distinctive tusk, they are found primarily in the Arctic.",
  "The _____, also known as sea lion, has external ear flaps, long foreflippers, and the ability to walk on all fours."
];

const answers = ["Blue Whale", "Manatees", "Humpback Whale", "Dolphins", "Narwhal", "Seal"];

const selectedQuestions = [];
const selectedAnswers = [];

var score = 0;

const generateI = () => {
  let indexes = [];
  while (indexes.length < 5) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes;
};

function generateQ(indexes) {
  let randomQuestions = [];
  indexes.forEach(index => {
    randomQuestions.push(questions[index]);
  });
  return randomQuestions;
};

function generateA(indexes) {
  let randomAnswers = [];
  indexes.forEach(index => {
    randomAnswers.push(answers[index]);
  });
  return randomAnswers;
};


function newQ(num) {
  let indexes = generateI();
  let qs = generateQ(indexes);
  let as = generateA(indexes);

  for(let i = 0; i < indexes.length; i++) {
    selectedQuestions.push(qs[i]);
    selectedAnswers.push(as[i]);
  }

  document.getElementById("startBtn").style.display = 'none';
  document.getElementById('factDisplay').innerHTML = selectedQuestions.splice(0,1);
  if (num === 1) {
    document.getElementById('userInput').style.display = 'none';
  } else {
    document.getElementById('userInput').innerHTML = "<input type='text' id='answerInput' placeholder='Your answer...'>";
  }
  document.getElementById('buttons').innerHTML = "<button class='generateBtn' id='nextQBtn' onclick='checkAnswer()'>Next question!</button><button class='newGameBtn' id='newBtn' onclick='restart()'>Restart!</button>";
};

const restart = () => {
  alert('Restarted!');
  newQ(1);
};

const checkAnswer = () => {
  const answer = selectedAnswers.splice(0,1);
  const userAnswer = document.getElementById('answerInput').value;
  if (userAnswer == answer) {
    score += 20;
    alert("Correct! You're doing great!");
  } else {
    alert("Nice try! That wasn't the correct answer, but keep going!");
  }
  document.getElementById('answerInput').value = '';
  nextQ();
};


const nextQ = () => {
  if (selectedQuestions.length <= 0) {
    const message = "Game Over! Your score is " + score + "<br/><button type='button' class='generateBtn' onClick='window.location.reload()'>Let's Play Again!</button>";
    document.getElementById('factDisplay').innerHTML = message;
    document.getElementById('userInput').style.display = 'none';
    document.getElementById("nextQBtn").style.display = 'none';
    document.getElementById("newBtn").style.display = 'none';
    document.getElementById('checkText').style.display = 'none';
    selectedQuestions = [];
    selectedAnswers = [];
    return;
  }
  document.getElementById('factDisplay').innerHTML = selectedQuestions.splice(0,1);
  document.getElementById('userInput').style.display = 'block';
  document.getElementById('buttons').innerHTML = "<button class='generateBtn' id='nextQBtn' onclick='checkAnswer()'>Next question!</button><button class='newGameBtn' id='newBtn' onclick='restart()'>Restart!</button>";
  
};
