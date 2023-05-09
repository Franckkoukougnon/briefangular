import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  @Input() selectedPokemon!: Pokemon;

}
