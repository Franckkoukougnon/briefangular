import { Component, Input } from "@angular/core";
import { Pokemon } from "src/app/models/Pokemon";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent {
  @Input() pokemonAvatar: Pokemon[] = [];
  onDelect(pokemon: Pokemon) {
    this.pokemonAvatar = this.pokemonAvatar.filter((p) => p.id !== pokemon.id);
  }
}
