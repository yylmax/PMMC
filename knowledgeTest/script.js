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


const newQ = () => {
  let indexes = generateI();
  let qs = generateQ(indexes);
  let as = generateA(indexes);

  for(let i = 0; i < indexes.length; i++) {
    selectedQuestions.push(qs[i]);
    selectedAnswers.push(as[i]);
  }
  document.getElementById("startBtn").style.display = 'none';
  document.getElementById('factDisplay').innerHTML = selectedQuestions.splice(0,1);
  document.getElementById('buttons').innerHTML = "<button class='generateBtn' id='nextQBtn' onclick='nextQ()'>Next question!</button><button class='newGameBtn' id='newBtn' onclick='restart()'>Restart!</button><button id='copyText' class='copyText'>Copy fact</button><span id='copied'>Copied!</span>";
  // prompt(selectedAnswers)
};

const restart = () => {
  alert('Restarted!');
  newQ();
};


const nextQ = () => {
  if (selectedQuestions.length <= 0) {
    document.getElementById('factDisplay').innerHTML = "Game Over! Your score is 100<br/><button type='button' class='generateBtn' onClick='window.location.reload()'>Let's Play Again!</button>";
    document.getElementById("nextQBtn").style.display = 'none';
    document.getElementById("newBtn").style.display = 'none';
    document.getElementById('copyText').style.display = 'none';
    selectedQuestions = [];
    selectedAnswers = [];
    return;
  }
  document.getElementById('factDisplay').innerHTML = selectedQuestions.splice(0,1);
  
  // prompt(selectedQuestions.splice(0,1));
};

// Create copy button
const copyBtn = document.getElementById('copyText');

// Copy the fact
const copiedFact = document.getElementById('copied');

copyBtn.addEventListener('click', copyFact);

async function copyFact () {
  const fact = document.getElementById('factDisplay').innerHTML;

  await navigator.clipboard.writeText(fact);

  copiedFact.style.display = 'block';

  setTimeout(() => {
    copiedFact.style.visibility = 'hidden';
  }, 2000);
}
