import "./game3App.css";
import SingleCard from './components/SingleCard'
import { useEffect, useState } from 'react'



// function Appgame3() {
//   return (
//     <div id="body">
//     <div className="game3App">
//       <h1>Magic Match</h1>
//       <button>New Game</button>
//     </div>
//     </div>
//   );
// }

// export default Appgame3

const cardImages = [
  {"src": "img/Blue Whale.JPEG",matched: false },
  {"src": "img/Dolphin.JPEG",matched: false },
  {"src": "img/Hawaiian Monk Seal.JPEG",matched: false },
  {"src": "img/Manatees.jpg",matched: false },
  {"src": "img/Seal.JPEG",matched: false },
  {"src": "img/Walrus.jpg",matched: false }
]

function Appgame3() {
  const[cards, setcards] = useState([])
  const[turns, setTuns] = useState(0)
  const[choiceOne, setChoiceOne] = useState(null)
  const[choiceTwo, setChoiceTwo] = useState(null)
  const[disabled, setDisabled] =useState(false)


  //shuffle cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages,...cardImages]
    .sort(() => Math.random() - 0.5) //就是大于0就变位置 小于不变 用来random的
    .map((card) => ({ ...card, id: Math.random() }))
    setcards(shuffleCards)
    setTuns(0)
  }

  //console.log(cards)
  //hanle choice
  const handleChoice = (card) =>{
    //console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card) //看choice one 有没有东西
    // console.log(choiceOne)
    // console.log(choiceTwo)

    // console.log(choiceOne == choiceTwo)

  }

  //compare 2 selected cards
  useEffect(() =>{
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        //console.log(choiceOne)
        //console.log(choiceTwo)
        console.log('those cards match')
        setcards(prevCards => {
          return prevCards.map(card =>{
            if (card.src === choiceOne.src){
              return{...card, matched: true}
            }else{
              return card
            }
          })
      })
        resetTurn()
      }else{
        console.log('those cards do not match')
        setTimeout(() => resetTurn(), 900)
      }

    }
    },[choiceOne,choiceTwo]
  )
  //console.log(cards)

  //reset choices & increase turn
  const resetTurn = () =>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTuns(prevTurns => prevTurns +1)
    setDisabled(false)
  }


  return (
    <div id="body">
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card= {card}
            handleChoice ={handleChoice}
            flipped ={card === choiceOne || card === choiceTwo || card.matched} 
            disabled ={disabled}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Appgame3