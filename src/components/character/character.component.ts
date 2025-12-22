import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { Observable } from 'rxjs';
import {
  Brainiac,
  Brute,
  Farmboy,
  Maiden,
  Pirate,
  Prince,
  SwordMaster,
  Wizard,
} from '../../models/character.model';
import { Percentage } from '../../models/types.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'pirates-dred-character',
  imports: [
    AsyncPipe,
    MatDivider,
  ],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent {
  private _characterService: CharacterService = inject(CharacterService);
  character: Observable<
    Pirate | SwordMaster | Brute | Brainiac | Wizard | Farmboy | Maiden | Prince
  > = this._characterService.getCharacter('test');

  setBuffs(
    characterBuffs: Record<string, unknown> | ArrayLike<unknown>
  ): { key: string; value: Percentage }[] {
    const buffs: { key: string; value: Percentage }[] = [];
    Object.entries(characterBuffs).forEach(([key, value]) => {
      buffs.push({ key, value: value as Percentage });
    });
    return buffs;
  }
}
