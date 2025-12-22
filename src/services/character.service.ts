import { inject, Injectable } from '@angular/core';
import { Brainiac, Brute, Farmboy, Maiden, Pirate, Prince, SwordMaster, Wizard } from '../models/character.model';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private _client: HttpClient = inject(HttpClient);
  defaultCharacter: Farmboy = {
    biography: 'Poor. And perfect. With eyes like the sea after a storm.',
    type: 'Farmboy',
    life: 100,
    name: 'Wesley',
    buffs: {
      strategy: 50,
      handToHand: 50,
      climbing: 60,
      loyalty: 100,
    },
    intelligence: 80,
    will: 100,
    strength: 80,
    agility: 80,
    charisma: 90
  }
  character: Pirate | SwordMaster | Brute | Brainiac | Wizard | Farmboy | Maiden | Prince = this.defaultCharacter;

  getCharacter(userId: string): Observable<Pirate | SwordMaster | Brute | Brainiac | Wizard | Farmboy | Maiden | Prince> {
    return this._client.post(`/api/character`, userId).pipe(
      catchError(() => of(this.character)),
      map(() => this.character)
    );
  }

}
