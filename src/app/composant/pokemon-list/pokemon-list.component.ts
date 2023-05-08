import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Pokemon } from "src/app/models/Pokemon";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent {
  @Input() pokemonAvatar: Pokemon[] = [];
  @Output() deletePokemonEven = new EventEmitter<number>();

  deletePokemons(id: number) {
    this.deletePokemonEven.emit(id);
  }
}
