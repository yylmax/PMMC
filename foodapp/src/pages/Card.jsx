import "../styles/card.css";

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
              src="https://source.unsplash.com/71u2fOofI-U/300x510"
              alt="Picture by Nathan Dumlao"
              class="card__image"
            />
            <figcaption class="card__caption">
              <h2 class="card__title">This Is Your Body And Brain On Coffee</h2>
              <p class="card__snippet">
                Drinking more caffeine during the coronavirus lockdown? Here's
                how it can affect you over time and advice on making it better
                for you.
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
              src="https://source.unsplash.com/qXMpNtNp1uE/300x510"
              alt="Picture by Daniel Lincoln"
              class="card__image"
            />
            <figcaption class="card__caption">
              <h2 class="card__title1">
                Why You Should Bring Your Dog To Work
              </h2>
              <p class="card__snippet">
                On Friday, offices around the country celebrated the 15th annual
                Take Your Dog to Work Day. Though the event's primary goal is to
                raise awareness for pet adoption, the unanticipated impact may
                be a slightly more relaxing work environment for any office
                choosing to participate.
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
