import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'pirates-dred-character',
  imports: [
    AsyncPipe,
  ],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  private _characterService: CharacterService = inject(CharacterService);
  character: Observable<Character> = this._characterService.getCharacter();
}
