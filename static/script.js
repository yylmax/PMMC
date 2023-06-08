const questions = [
  "_______ is the largest animal ever known to have lived on earth.",
  "_______, often called sea cows, are herbivorous marine mammals.",
  "The _______ is known for its complex songs that can last for hours.",
  "_______ are known for their playful behavior and are found in all the world's oceans.",
  "_______ are notable for their distinctive tusk, they are found primarily in the Arctic.",
  "The _______, also known as sea lion, has external ear flaps, long foreflippers, and the ability to walk on all fours.",
	"Sea lions use _______ side of flippers to swim, Front or back?",
	"Do sea lions move on their bellies while on land or on all 4 flippers?",
	"Sea lions have _______ on their head.",
	"_______ is the bump that adult males develop on top of their head when they are mature.",
	"Are females bigger than males? Yes or No",
	"How long to sea lion moms nurse their pups: 1 month, 6-11 months, 2 years?",
	"The color of female sea lions when dry is _______.",
	"Which is a predator of a sea lion? Elephant Seals or Killer Whales",
	"Which is a human threat to sea lions?: Gillnets, Paddle Boards, or Electric Cars",
	"Northern Elephant Seals are the  second biggest seal in the world, True or False?",
	"Adult male northern elephant seals can weigh up to: 500 lbs, 5,000 lbs, or 50,000 lbs?",
	"Elephant seals get their name from: their trunk like nose, their size, or the sounds they make?",
	"Elephant seals Molt both their fur and skin once a year, True or False?",
	"Elephant seals can dive up to: 400 feet deep, 4,000 feet deep, or 40,000 feet deep",
	"Elephant seals can hold their breath for up to: 10 minutes, 45 minutes, 2 hours?",
	"Where do elephant seals spend 80% of their year? in the open ocean, on land, on boat docks",
	"Northern elephant seals Travel up to: 300 miles per year, 3,000 miles per year, 3,000 miles per year",
	"What human activities threaten elephant seals? climate change, entanglement in fishery gear, both a & b",
	"When they can, harbor seals haul out of the water in groups to: socialize, to eat their food, to feel safe",
	"Harbor seals forage in groups: True or False?",
	"Adult male harbor seals can weigh up to: 200 lbs, 500 lbs, 1,000 lbs?",
	"Harbor seals nurse for how long before mom leaves them? 1 month, 3 months, 6 months",
	"All seals and sea lions are at risk of dying from this human impact: gillnet entanglements, mistaking plastic for food, climate change reducing food availability, all of the above",
	"What keeps a fur seal warm? fur, blubber, fat",
	"What is the only animal with fur that is thicker than a fur seal? polar bear, sea lion, sea otter",
	"Female fur seals are larger than males: True or False?",
	"Adult fur seals spend how many days a year at sea? 100, 250, over 300",
	"Fur seals have ear flaps: True or False?",
	"Things I can do at home to help reduce climate change include: unplug electronics I am not using, carpool or ride a bike turn off lights when leaving a room, all of the above",
	"Things I can do at home to reduce plastics in the environment include: lead a beach clean up, use containers for my lunch avoid any single use packaged items, all of the above",
	"I can help marine mammals by teaching others what they can do to help, only use single use plastic items buy fish caught in gillnets, all of the above"
];

const answers = [
  "Blue Whale", "Manatees", "Humpback Whale", "Dolphins", "Narwhal", "Seal",
  "Front", "on all 4 flippers", "Ear Flaps", "Sagittal Crest", "No", "6-11 months",
  "Blonde", "Killer Whales", "Gillnets", "True", "5,000 lbs", "their trunk like nose",
  "True", "4,000 feet deep", "2 hours", "in the open ocean", "13,000 miles per year", 
  "both a & b", "to feel safe", "False", "200 lbs", "1 month", "all of the above",
  "fur", "sea otter", "False", "over 300", "True", "all of the above", "all of the above",
  "teaching others what they can do to help"
  ];

  const selectedQuestions = [];
const selectedAnswers = [];

var score = 0;
//const [showText, setShowText] = useState(false);


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


function newQ() {
  let indexes = generateI();
  let qs = generateQ(indexes);
  let as = generateA(indexes);

  for(let i = 0; i < indexes.length; i++) {
    selectedQuestions.push(qs[i]);
    selectedAnswers.push(as[i]);
  }

  document.getElementById("startBtn").style.display = 'none';
  document.getElementById('factDisplay').innerHTML = selectedQuestions.splice(0,1);
  document.getElementById('userInput987012').innerHTML = "<input type='text' id='answerInput' placeholder='Your answer...'>";
  document.getElementById('buttons12376').innerHTML = "<button class='generateBtn' id='nextQBtn' onclick='checkAnswer()'>Next question!</button><button class='newGameBtn' id='newBtn' onClick='window.location.reload()'>Restart!</button>";
};


const checkAnswer = () => {
  const answer = selectedAnswers.splice(0,1);
  const userAnswer = document.getElementById('answerInput').value;
  const checkedCorrect = document.getElementById('checkedCorrect');
  const checkedIncorrect = document.getElementById('checkedIncorrect');
  const correctAnswerElement = document.getElementById('correctAnswer');
  let isCorrect = false;
  // setShowText(true);
  // setTimeout(() => {
  //     setShowText(false);
  // }, 10000);
  
  if (userAnswer == answer) {
    score += 20;
    isCorrect = true;
    // alert("Correct! You're doing great!");
    // checkedCorrect.style.display = "block";
    // setTimeout(() => {
    //   checkedIncorrect.style.display = "none";
    // }, 2000);
  } else {
    // alert("Nice try! That wasn't the correct answer, but keep going!");
  //   checkedIncorrect.style.display = "block";
  //     setTimeout(() => {
  //       checkedIncorrect.style.display = "none";
  //   }, 2000);
  isCorrect = false;
  }
  if (isCorrect){
    correctAnswerElement.innerText = `Correct!`;
 
  }
  else{
    correctAnswerElement.innerText = `The correct answer is: ${answer}`;
 
  }
  // correctAnswerElement.innerText = `The correct answer is: ${answer}`;
  correctAnswerElement.style.display = "block";
  setTimeout(() => {
    correctAnswerElement.style.display = "none";
  }, 1666);
  document.getElementById('answerInput').value = '';
  
  nextQ();
};


const nextQ = () => {
  if (selectedQuestions.length <= 0) {
    const message = "Game Over! Your score is " + score + "<br/><button type='button' class='generateBtn' onClick='window.location.reload()'>Let's Play Again!</button>";
    document.getElementById('factDisplay').innerHTML = message;
    document.getElementById('userInput987012').style.display = 'none';
    document.getElementById("nextQBtn").style.display = 'none';
    document.getElementById("newBtn").style.display = 'none';
    document.getElementById('checkText').style.display = 'none';
    selectedQuestions = [];
    selectedAnswers = [];
    return;
  }
  document.getElementById('factDisplay').innerHTML = selectedQuestions.splice(0,1);
  document.getElementById('userInput987012').style.display = 'block';
  document.getElementById('buttons12376').innerHTML = "<button class='generateBtn' id='nextQBtn' onclick='checkAnswer()'>Next question!</button><button class='newGameBtn' id='newBtn' onClick='window.location.reload()'>Restart!</button>";
  
};

