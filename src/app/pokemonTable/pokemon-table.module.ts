import {NgModule} from '@angular/core';
import {PokemonTableComponent} from 'src/app/pokemonTable/pokemon-table.component';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    PokemonTableComponent
  ],
  declarations: [PokemonTableComponent]
})
export class PokemonTableModule {

}
