import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Intro.css";

const Intro = () => {
  return (
    <>
      <div>
        <h1 id="introHeader">Introduction Page</h1>
      </div>
      <body>
        <section className="mammalIntro">
          <img
            id="introPic"
            src="https://www.shutterstock.com/image-photo/dolphins-pool-marine-mammal-park-600w-2150565937.jpg"
          ></img>
          <p>
            Mammals are a diverse group of warm-blooded vertebrates that are
            characterized by the presence of mammary glands, fur or hair, and
            three middle ear bones. Mammals are the only animals that can
            produce milk to feed their young, and they are also the only animals
            that have a neocortex, a region of the brain that is associated with
            higher-order thinking.
            <br />
            There are over 5,000 species of mammals, and they can be found in a
            wide variety of habitats, from the Arctic to the Antarctic. Mammals
            range in size from the tiny bumblebee bat, which is only about 2
            inches long, to the blue whale, which is the largest animal on
            Earth.
            <br />
            Mammals play an important role in the ecosystem. They are a major
            source of food for other animals, and they also help to pollinate
            plants and disperse seeds. Mammals are also important for humans, as
            they provide us with food, clothing, and companionship.
            <br />
            Some of the most well-known mammals include humans, dogs, cats,
            horses, cows, pigs, sheep, and whales. However, there are many other
            mammals that are less well-known, such as bats, dolphins, kangaroos,
            and lemurs.
            <br />
            Mammals are an important part of the natural world, and they play a
            vital role in the ecosystem. We need to do everything we can to
            protect mammals and their habitats.
            <br />
          </p>
        </section>
        <section>
          <h2>Marine Mammal Fun Facts</h2>
          <p>California Sea Lions: </p>
          <ul>
            <li>Have tiny ear flaps sticking out of their head</li>
            <li>Can walk on all four flippers on land</li>
            <li>Swim using their very large front flippers</li>
            <li>Males are dark brown when dry</li>
            <li>Females are blond when dry</li>
            <li>Can hold their breath up to 10 minutes</li>
            <li>Most sea lions are born in the month of June</li>
            <li>Pups nurse from their mothers for 6 to 11 months</li>
            <li>
              They eat many types of fish, squid, and sometimes crustaceans such
              as: market squid, anchovies, sardines, herring, octopus, and more.
            </li>
            <li>Natural predators: sharks and killer whales</li>
          </ul>
        </section>
      </body>
    </>
  );
};

export default Intro;
