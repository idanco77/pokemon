import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from 'src/app/editor/editor.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {GalleryComponent} from 'src/app/gallery/gallery.component';
import {AllStoredPokemonResolve} from 'src/app/_resolves/all-stored-pokemon-resolve.service';
import {PokemonService} from 'src/app/_services/http/pokemon.service';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    resolve: {allStoredPokemon: AllStoredPokemonResolve}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatInputModule
  ],
  declarations: [GalleryComponent],
  providers: [
    AllStoredPokemonResolve,
    PokemonService
  ]
})
export class GalleryModule {

}
