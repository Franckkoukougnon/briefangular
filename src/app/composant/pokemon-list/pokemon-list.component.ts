import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/models/Pokemon";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent {
  @Input() pokemonList: Pokemon[] = [
    {
      id: 1,
      name: "Pikachu",
      type: "Electric",
      image: "./assets/images/pikachu.png",
      shortDescription: "un petit Pokémon Jaune",
      longDescription:
        "Pikachu is an Electric-type Pokémon that is very popular among trainers. It is known for its lightning bolt-shaped tail and its ability to generate electricity.",
    },
    {
      id: 2,
      name: "Charizard",
      type: "Fire/Flying",
      image: "./assets/images/Manimal.png",
      shortDescription: "A large, orange, powerful Pokémon",
      longDescription:
        "Charizard is a Fire/Flying-type Pokémon that is known for its ability to breathe fire. It has large wings that allow it to fly and it is very strong in battle.",
    },
    {
      id: 3,
      name: "Manimal",
      type: "Varan",
      shortDescription: "A large, Black, powerful Pokémon",
      image: "./assets/images/Charizard.png",
      longDescription:
        "Manimal is a Varan-type Pokémon that is known for its ability to breathe fire. It has large wings that allow it to fly and it is very strong in battle.",
    },
  ];
}