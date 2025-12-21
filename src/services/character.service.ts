import { Injectable } from '@angular/core';
import { Brainiac, Brute, Character, Farmboy, Maiden, Pirate, Prince, SwordMaster, Wizard } from '../models/character.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  character: Character | Pirate | SwordMaster | Brute | Brainiac | Wizard | Farmboy | Maiden | Prince = {
    biography: 'Poor. And perfect. With eyes like the sea after a storm.',
    class: 'Farmboy',
    life: 100,
    name: 'Wesley',
  }

  getCharacter(): Character {
    return this.character;
  }

}
