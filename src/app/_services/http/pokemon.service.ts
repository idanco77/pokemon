import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Injectable} from '@angular/core';
import {Pokemon} from 'src/app/_models/pokemon.model';

@Injectable()
export class PokemonService
{
  baseApi = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

  getListOfAllPokemon(): Observable<string[]> {
    return <Observable<string[]>> this.http.get(this.baseApi + 'list');
  }

  store(pokemon: string): Observable<boolean> {
    return <Observable<boolean>> this.http.post(this.baseApi + 'store', {pokemon});
  }

  delete(pokemonId: number): Observable<boolean> {
    return <Observable<boolean>> this.http.delete(this.baseApi + pokemonId);
  }

  getAllStoredPokemon(): Observable<Pokemon[]> {
    return <Observable<Pokemon[]>> this.http.get(this.baseApi + 'index');
  }
}
