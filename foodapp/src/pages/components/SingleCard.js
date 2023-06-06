import './SingleCard.css'

export default function SingleCard({card, handleChoice, flipped, disabled}){
    const handleClick = () =>{
      if(!disabled){
        handleChoice(card)}
    }
    return(
      <div id="body">
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className="front" src={card.src} alt="card front"/>
              <img className="back" 
              src="img/IMG_8235.PNG" 
              onClick={handleClick} 
              alt="card back" />
            </div>
          </div>
          </div>


    )
}