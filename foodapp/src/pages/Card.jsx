import "../styles/card.css";
import saveImage from "../assets/save.png";
import bagImage from "../assets/hhhh.jpg";
import familyImage from "../assets/family.png";


const Card = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      />

      <div class="container">
        <div class="card">
          <figure class="card__thumb">
            <img
              id="save" src={saveImage} alt="Image 1"
              class="card__image"
            />
            <figcaption class="card__caption">
              <h2 class="card__title">Reduce Pollution and Plastic Waste</h2>
              <p class="card__snippet">
                One aspect of marine mammal conservation is reducing pollution and plastic waste in our oceans. 
                Encourage individuals to adopt eco-friendly practices such as minimizing the use of single-use plastics, 
                properly disposing of waste, and participating in beach clean-up activities. By reducing pollution and plastic waste, 
                we can create cleaner and healthier habitats for marine mammals, reducing the risk of ingestion and entanglement.
              </p>
              <a
                href=""
                class="card__button"
              >
                Read more
              </a>
            </figcaption>
          </figure>
        </div>

        <div class="card">
          <figure class="card__thumb">
            <img
              id="bag" src={bagImage} alt="Image 2" 
              class="card__image"
            />
            <figcaption class="card__caption">
              <h2 class="card__title">Reduce Pollution and Plastic Waste</h2>
              <p class="card__snippet">
                One aspect of marine mammal conservation is reducing pollution and plastic waste in our oceans. 
                Encourage individuals to adopt eco-friendly practices such as minimizing the use of single-use plastics, 
                properly disposing of waste, and participating in beach clean-up activities. By reducing pollution and plastic waste, 
                we can create cleaner and healthier habitats for marine mammals, reducing the risk of ingestion and entanglement.
              </p>
              <a
                href=""
                class="card__button"
              >
                Read more
              </a>
            </figcaption>
          </figure>
        </div>

        <div class="card">
          <figure class="card__thumb">
            <img
              id="family" src={familyImage} alt="Image 3"
              class="card__image"
            />
            <figcaption class="card__caption">
              <h2 class="card__title1">
                Promote Sustainable Fishing Practices:
              </h2>
              <p class="card__snippet">
                Promoting sustainable fishing practices is crucial for the well-being of marine mammals. 
                Encourage individuals to support sustainable seafood choices, such as consuming responsibly 
                sourced fish and avoiding species that are overfished or caught using destructive methods. 
                By supporting sustainable fishing practices, we can maintain a balanced ecosystem and ensure 
                an adequate food supply for marine mammals.
              </p>
              <a
                href=""
                class="card__button"
              >
                Read more
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Card;
