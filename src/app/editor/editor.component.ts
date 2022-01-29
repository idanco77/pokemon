import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {map, Observable, startWith} from 'rxjs';
import {PokemonOption} from 'src/app/_models/pokemon-option.model';
import {ActivatedRoute} from '@angular/router';
import {HelpersService} from 'src/app/_services/generic/helpers.service';
import {NotificationService} from 'src/app/_services/generic/notification.service';
import {PokemonService} from 'src/app/_services/http/pokemon.service';
import {Pokemon} from 'src/app/_models/pokemon.model';

@Component({
  selector: 'app-editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  pokemonForm: FormGroup;
  list: string[];
  filteredList: Observable<string[]>;
  isSaved: boolean;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private helpers: HelpersService, private notificationService:NotificationService,
              private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.initForm();
    this.list = this.route.snapshot.data['pokemonList'];
    this.helpers.setPageSpinner(false);
    this.filteredList = (<FormControl>this.pokemonForm.get('name')).valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
//    if (value.length < 3) {
   //   return [];
   // }
    const filterValue = value.toLowerCase();
    return this.list.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  submit() {
    if (this.pokemonForm.valid) {
      const value: string = ((<FormControl>this.pokemonForm.get('name')).value);
      const selectedPokemon: string | undefined = this.list.find(option => option.toLowerCase().includes(value));
      if (!selectedPokemon) {
        this.notificationService.error('Pokemon does not exists');
        return;
      }
      this.helpers.setPageSpinner(true);
      this.isSaved = false;
      this.pokemonService.store(selectedPokemon).subscribe((res: boolean) => {
        if (res) {
          this.notificationService.success('Pokemon saved successfully');
          this.isSaved = true;
        } else {
          this.notificationService.error();
        }
        this.helpers.setPageSpinner(false);
      });
    }
  }

  private initForm() {
    this.pokemonForm = this.fb.group({
      name: [null, Validators.required]
    });

  }

  onSelect(optionName: string) {
    this.checkIsExist(optionName);
  }

  private checkIsExist(name: string) {
    this.pokemonService.getAllStoredPokemon().subscribe((storedPokemon: Pokemon[]) => {
      const existsPokemonNames: string[] = storedPokemon.map((pokemon: Pokemon) => pokemon.name);
      if (existsPokemonNames.includes(name)) {
        this.pokemonForm.get('name')?.setErrors({exists: true});
      }
    });
  }
}

