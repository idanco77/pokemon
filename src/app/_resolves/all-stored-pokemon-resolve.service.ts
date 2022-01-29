import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {PokemonService} from 'src/app/_services/http/pokemon.service';
import {Injectable} from '@angular/core';
import {HelpersService} from 'src/app/_services/generic/helpers.service';
import {PokemonOption} from 'src/app/_models/pokemon-option.model';
import {Pokemon} from 'src/app/_models/pokemon.model';

@Injectable()
export class AllStoredPokemonResolve implements Resolve<Pokemon[]> {
  constructor(private pokemonService: PokemonService, private helpers: HelpersService) {
  }
  resolve(): Observable<Pokemon[]> {
    this.helpers.setPageSpinner(true);
    return this.pokemonService.getAllStoredPokemon();
  }
}
