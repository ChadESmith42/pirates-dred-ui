import { KeyValuePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CharacterBuffPipe } from '../../../pipes/character-buff.pipe';
import { MatButtonModule } from '@angular/material/button';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'pirates-dred-edit-buffs',
  imports: [
    CharacterBuffPipe,
    KeyValuePipe,
    MatButtonModule,
  ],
  templateUrl: './edit-buffs.component.html',
  styleUrl: './edit-buffs.component.scss'
})
export class EditBuffsComponent {
  private _characterService: CharacterService = inject(CharacterService);
  @Input() selectedType = '';
  @Input() buffs: Record<string, number> = {};
  @Output() savedBuffs: EventEmitter<object> = new EventEmitter<object>();
  startingBuffPoints = this._characterService.startingBuffPoints;

  calculateBuffPointsRemaining(maxPoints: number): number {
    return this._characterService.calculateBuffPointsRemaining(maxPoints);
  }

  incrementBuff(buffKey: string): void {
    const remaining = this.calculateBuffPointsRemaining(this.startingBuffPoints);
    if (remaining > 0) {
      this.buffs[buffKey] = (this.buffs[buffKey] ?? 0) + 1;
    }
  }

  decrementBuff(buffKey: string): void {
    if (this.buffs[buffKey] > 1) {
      this.buffs[buffKey] = this.buffs[buffKey] - 1;
    }
  }

  balanceBuffs(buffs: Record<string, number>): void {
    const keys = Object.entries(buffs);
    for(const key of keys) {
      buffs[key[0]] = 5;
    }
  }

  resetBuffs(buffs: Record<string, number>): void {
    const keys = Object.entries(buffs);
    for(const key of keys) {
      buffs[key[0]] = 1;
    }
    console.log(buffs);
  }

  saveBuffs(buffs: Record<string, number>): void {
    this.savedBuffs.emit(buffs);
  }
}
