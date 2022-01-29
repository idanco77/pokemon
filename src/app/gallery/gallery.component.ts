import { Component, OnInit } from '@angular/core';
import {PokemonService} from 'src/app/_services/http/pokemon.service';
import {Pokemon} from 'src/app/_models/pokemon.model';
import {ActivatedRoute} from '@angular/router';
import {HelpersService} from 'src/app/_services/generic/helpers.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  allStoredPokemon: Pokemon[];
  cachedPokemon: Pokemon[];
  existingTypes: string[];

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute,
              private helpers: HelpersService) { }

  ngOnInit(): void {
    this.allStoredPokemon = this.route.snapshot.data['allStoredPokemon'];
    this.helpers.setPageSpinner(false);
    this.cachedPokemon = this.allStoredPokemon;
    this.existingTypes = this.getExistingTypes();
  }

  search(event: KeyboardEvent) {
    const value = (<HTMLInputElement>event.target).value;
    const searchText = value.toLowerCase().trim();
    if (searchText.length > 0) {
      if (value.length <= 2) {
        return;
      }
      this.allStoredPokemon = this.cachedPokemon.filter((pokemon: Pokemon) => pokemon.name.includes(searchText));
    } else {
      this.allStoredPokemon = this.cachedPokemon;
    }
  }

  private getExistingTypes(): string[] {
    const types = this.cachedPokemon.map((pokemon: Pokemon) => {
      return pokemon.types;
    });

    return [...new Set([].concat(...types))];
  }

  filterByType(type: string | null) {
    if (type) {
      this.allStoredPokemon = this.cachedPokemon.filter((pokemon: Pokemon) => pokemon.types.includes(type));
    } else {
      this.allStoredPokemon = this.cachedPokemon;
    }
  }

}
