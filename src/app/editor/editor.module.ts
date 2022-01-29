import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from 'src/app/editor/editor.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ListOfAllPokemonResolve} from 'src/app/_resolves/list-of-all-pokemon.resolve';
import {PokemonService} from 'src/app/_services/http/pokemon.service';
import {PokemonTableModule} from 'src/app/pokemonTable/pokemon-table.module';
import {AllStoredPokemonResolve} from 'src/app/_resolves/all-stored-pokemon-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
    resolve: {
      pokemonList: ListOfAllPokemonResolve,
      pokemon: AllStoredPokemonResolve
    }
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatAutocompleteModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    PokemonTableModule
  ],
  declarations: [EditorComponent],
  providers: [
    ListOfAllPokemonResolve,
    AllStoredPokemonResolve,
    PokemonService,
  ]
})
export class EditorModule {

}
