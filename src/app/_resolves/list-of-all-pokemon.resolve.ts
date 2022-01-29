import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {PokemonService} from 'src/app/_services/http/pokemon.service';
import {Injectable} from '@angular/core';
import {HelpersService} from 'src/app/_services/generic/helpers.service';

@Injectable()
export class ListOfAllPokemonResolve implements Resolve<string[]> {
  constructor(private pokemonService: PokemonService, private helpers: HelpersService) {
  }
  resolve(): Observable<string[]> {
    this.helpers.setPageSpinner(true);
    return this.pokemonService.getListOfAllPokemon();
  }
}
