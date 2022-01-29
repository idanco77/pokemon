import {Component, Input, OnChanges} from '@angular/core';
import {PokemonService} from 'src/app/_services/http/pokemon.service';
import {NotificationService} from 'src/app/_services/generic/notification.service';
import {HelpersService} from 'src/app/_services/generic/helpers.service';
import {Pokemon} from 'src/app/_models/pokemon.model';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html'
})
export class PokemonTableComponent implements OnChanges {
  @Input() isSaved: boolean = false;
  pokemon: Pokemon[];

  constructor(private pokemonService: PokemonService, private notificationService: NotificationService,
              private helpers: HelpersService) {
  }

  ngOnInit() {
    this.fetchItems();
  }

  ngOnChanges() {
    if (this.isSaved) {
        this.fetchItems();
        this.isSaved = false;
      }
  }

  fetchItems() {
      this.pokemonService.getAllStoredPokemon().subscribe((pokemon: Pokemon[]) => {
        this.pokemon = pokemon;
      });
  }

  delete(id: number): void {
    this.notificationService.info('Are you sure?').then(confirm => {
      if (confirm.isConfirmed) {
        this.helpers.setPageSpinner(true);
        this.pokemonService.delete(id).subscribe((res: boolean) => {
          if (res) {
            this.notificationService.success('Deleted Successfully');
            this.fetchItems();
          } else {
            this.notificationService.error();
          }
          this.helpers.setPageSpinner(false);
        });
      }});
  }
}
