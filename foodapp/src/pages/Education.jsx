import React from "react";
import { useState } from "react";
import "../styles/test3.css";
import character1Image from "../assets/h1.png";
import character2Image from "../assets/h2.png";
import character3Image from "../assets/h3.png";
import saveImage from "../assets/back1.jpg";
import bagImage from "../assets/back2.jpg";
import familyImage from "../assets/back3.jpg";
import helpImage from "../assets/back4.jpg";

const Education = () => {
  return (
    <html>
      <body id="eduBody">
        <div className="container">
          {/* Introduction */}
          <h1 className="title with-margin-bottom">
            Interactive Mini Games for Kids
          </h1>

          <p class="has-text-align-left">
            Marine mammals are fascinating creatures that have adapted to life
            in the ocean. They include animals such as seals, sea lions,
            dolphins, whales, and manatees. These animals are highly
            intelligent, have specialized adaptations for living in water, and
            play crucial roles in marine ecosystems.
          </p>
          <p class="has-text-align-left">
            However, the ocean home of marine mammals is facing significant
            threats due to human activities. Pollution, climate change, habitat
            destruction, overfishing, and disturbance from human presence are
            endangering their survival. It is our responsibility to take action
            and protect these incredible creatures and their habitats.
          </p>
          <p class="has-text-align-left">
            However, the ocean home of marine mammals is facing significant
            threats due to human activities. Pollution, climate change, habitat
            destruction, overfishing, and disturbance from human presence are
            endangering their survival. It is our responsibility to take action
            and protect these incredible creatures and their habitats.
          </p>
          {/* Displaying Images */}
          <div class="wp-block-image">
            <figure class="aligncenter size-full">
              <img
                decoding="bag"
                width="500"
                height="500"
                src={bagImage}
                alt
                class="wp-image-85837 perfmatters-lazy"
              />
            </figure>
          </div>

          <div class="wp-block-image">
            <figure class="aligncenter size-full">
              <img
                decoding="save"
                width="500"
                height="500"
                src={saveImage}
                alt
                class="wp-image-85837 perfmatters-lazy"
              />
            </figure>
          </div>

          <div class="wp-block-image">
            <figure class="aligncenter size-full">
              <img
                decoding="family"
                width="500"
                height="500"
                src={familyImage}
                alt
                class="wp-image-85837 perfmatters-lazy"
              />
            </figure>
          </div>
          <div class="wp-block-image">
            <figure class="aligncenter size-full">
              <img
                decoding="help"
                width="500"
                height="500"
                src={helpImage}
                alt
                class="wp-image-85837 perfmatters-lazy"
              />
            </figure>
          </div>

          <div class="wp-block-group is-layout-constrained">
            <div class="wp-block-group__inner-container">
              <h2 class="wp-block-heading">How To Keep The Ocean Clean</h2>
              <div class="wp-block-group is-layout-flow">
                <div class="wp-block-group__inner-container">
                  <p class="has-text-align-left">
                    Keeping the ocean clean is vital for the well-being of
                    marine mammals and the overall health of marine ecosystems.
                    Here's why it's important:
                  </p>
                  <p>
                    1. Biodiversity: Marine mammals are key components of marine
                    ecosystems. They play critical roles in maintaining
                    biodiversity, regulating food chains, and balancing
                    ecosystems. By protecting marine mammals, we ensure the
                    preservation of biodiversity and the functioning of healthy
                    ocean ecosystems.
                  </p>
                  <p>
                    2. Conservation of Species: Many marine mammal species are
                    endangered or threatened due to human activities. Keeping
                    the ocean clean helps protect their habitats, ensuring their
                    survival and contributing to the conservation of these
                    species for future generations.
                  </p>
                  <p>
                    3. Ecosystem Balance: Marine mammals contribute to the
                    balance of marine ecosystems by controlling populations of
                    prey species and promoting ecosystem resilience. Their
                    presence influences the distribution and abundance of other
                    marine organisms, creating a harmonious ecological balance.
                  </p>
                  <p>
                    4. Economic and Cultural Value: Marine mammals attract
                    tourism and generate economic benefits for coastal
                    communities. Whale watching, dolphin encounters, and other
                    forms of eco-tourism provide sustainable economic
                    opportunities. By keeping the ocean clean and preserving
                    marine mammal populations, we support local economies and
                    cultural heritage.
                  </p>
                  <p></p>
                </div>
              </div>
              {/*Section: Actions To Protect Marine Mammals*/}
              <h2 class="wp-block-heading">
                Actions To Protect Marine Mammals
              </h2>
              <div class="wp-block-group is-layout-flow">
                <div class="wp-block-group__inner-container">
                  <p>
                    1. Reduce pollution by properly disposing of trash, avoiding
                    single-use plastics, and using eco-friendly products.
                  </p>
                  <p>
                    2. Practice responsible fishing to minimize bycatch and
                    support sustainable seafood options.
                  </p>
                  <p>
                    3. Participate in beach clean-ups, support marine
                    conservation organizations, and promote ocean conservation
                    initiatives.
                  </p>
                  <p>
                    4. Respect marine mammals' natural behavior and habitat by
                    following responsible wildlife viewing guidelines.
                  </p>
                  <p>
                    5. Support sustainable tourism practices and avoid
                    activities that exploit captive marine mammals.
                  </p>
                  <p>
                    6. Address climate change by reducing carbon footprint and
                    advocating for climate-related policies.
                  </p>
                </div>
                <p class="has-text-align-left">
                  By adopting these measures, we can make a significant
                  difference in the conservation of marine mammals and the
                  overall health of our oceans. Together, we can create a
                  cleaner and safer environment for these remarkable creatures
                  to thrive.
                </p>
              </div>
            </div>
          </div>
          {/*characters dialogue*/}
          <div className="dialogue-container">
            <div className="character-container">
              <div className="character">
                <img
                  src={character1Image}
                  alt="Scarlett"
                  className="character-image"
                />
                <h2 className="character-name">Scarlett</h2>
              </div>
            </div>
            <div className="dialogue">
              <div className="message">
                "Humans have hurt the ocean home of marine mammals. 
                Let me tell you some things we can do to make marine mammals
                safer and happier. 
                <div>Unplug electronics and turn off lights when you aren't using them. This helps reduce climate change and
                keep the planet cooler!"</div>
                <div>1.Keep ocean animals safe from litter. Do a beach cleanup with your family or friends. Keep garbage out
                of the ocean by using a reusable lunch box/water bottle.</div>
            <div className="character-container">
              <div className="character">
                <img
                  src={character2Image}
                  alt="Jiahao"
                  className="character-image"
                />
                <h2 className="character-name">Jiahao</h2>
              </div>
            </div>
            <div className="dialogue">
              <div className="message">
                "That's great advice! We can also{" "}
                <span className="highlight">encourage our family</span> to
                carpool, ride bikes, or walk places to keep the planet cooler
                and the ocean cleaner!"
              </div>
              <div className="message">
                "And we can{" "}
                <span className="highlight">create a club at school</span> that
                helps people learn about the ocean, do beach cleanups, or raise
                money and supplies for organizations that protect marine mammals
                like PMMC!"
              </div>
            </div>

            <div className="character-container">
              <div className="character">
                <img
                  src={character3Image}
                  alt="Alethia"
                  className="character-image"
                />
                <h2 className="character-name">Alethia</h2>
              </div>
            </div>
            <div className="dialogue">
              <div className="message">
                "I recently read about the impact of overfishing on marine mammal populations.
                When their food sources decline, it affects their survival and overall ecosystem balance.
                Promoting sustainable fishing practices and responsible seafood consumption can make a positive impact."
            
              </div>
            </div>

            <div className="character-container">
              <div className="character">
                <img
                  src={character1Image}
                  alt="Liangchun"
                  className="character-image"
                />
                <h2 className="character-name">Liangchun</h2>
              </div>
            </div>
            <div className="dialogue">
              <div className="message">
                "Did you know that marine mammals, like dolphins and whales, are highly intelligent creatures?"{" "}
                <span className="highlight"> They have complex social structures and communicate through various vocalizations.
                </span> It's fascinating how they navigate the vast ocean and play important roles in maintaining marine ecosystems.
                and the ocean cleaner!"
              </div>
              <div className="message">
                "We need to protect the ocean to ensure the survival of marine mammals. 
                Absolutely! Pollution and habitat destruction are major threats to their existence. 
                By reducing our carbon footprint and supporting sustainable practices, we can make a difference."
              </div>
            </div>

            <div className="character-container">
              <div className="character">
                <img
                  src={character2Image}
                  alt="Yilong"
                  className="character-image"
                />
                <h2 className="character-name">Yilong</h2>
              </div>
            </div>
            <div className="dialogue">
              <div className="message">
                "TI heard that noise pollution from ships and sonar systems can be harmful to marine mammals.
                It disrupts their communication and navigation abilities, leading to stranding and injury.
                We should advocate for stricter regulations to minimize these disturbances!"
              </div>
            </div>

            {/* some links for protect marine animals */}
            <div class="kb-table-of-contents-title-wrap kb-toggle-icon-style-arrow">
              <span class="kb-table-of-contents-title">
                Links to learn more about marine mammals
              </span>
            </div>
            <ul class="https://www.marinebio.org/creatures/marine-vertebrates/marine-mammals/">
              <li>
                <a
                  class="kb-table-of-contents__entry"
                  href="#how-to-teach-science"
                >
                  What Is Marine Mammal
                </a>
              </li>
              <li>
                <a
                  class="kb-table-of-contents__entry"
                  href="#easy-science-projects-to-try"
                >
                  How Can People Help Marine Mammal
                </a>
              </li>
            </ul>
          </div>

          <div class="fl-module-content fl-node-content">
            <h1 class="fl-heading">
              <span class="fl-heading-text">Join Our Club</span>
            </h1>
          </div>
        </div>
        </div> 
        </div>  
      </body>
    </html>
  );
};

export default Education;
