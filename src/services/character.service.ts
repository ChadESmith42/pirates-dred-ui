import { inject, Injectable } from '@angular/core';
import {
  Brainiac,
  Brute,
  Farmboy,
  Maiden,
  Pirate,
  Prince,
  SwordMaster,
  Wizard,
} from '../models/character.model';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private _client: HttpClient = inject(HttpClient);
  private _totalTraitPoints = 75;
  defaultCharacter: Farmboy = {
    id: '1',
    biography: 'Poor. And perfect. With eyes like the sea after a storm.',
    type: 'Farmboy',
    life: 100,
    name: 'Wesley',
    buffs: {
      strategy: 1,
      handToHand: 1,
      climbing: 1,
      loyalty: 1,
    },
    intelligence: 1,
    will: 1,
    strength: 1,
    agility: 1,
    charisma: 1,
  };
  character: Pirate | SwordMaster | Brute | Brainiac | Wizard | Farmboy | Maiden | Prince = this.defaultCharacter;
  pirateBuffs = {
    startingBuffPoints: 25,
    buffs: {
      handToHand: 1,
      fencing: 1,
      strategy: 1,
      leadership: 1,
      intimidation: 1,
    },
  };
  swordMasterBuffs = {
    startingBuffPoints: 20,
    buffs: {
      fencing: 1,
      parryChance: 1,
      precision: 1,
      counterAttack: 1,
    },
  };
  bruteBuffs = {
    startingBuffPoints: 20,
    buffs: {
      handToHand: 1,
      durability: 1,
      carryingCapacity: 1,
      intimidation: 1,
    },
  };
  brainiacBuffs = {
    startingBuffPoints: 20,
    buffs: {
      strategy: 1,
      poisonResistance: 1,
      wit: 1,
      deception: 1,
    },
  };
  wizardBuffs = {
    startingBuffPoints: 20,
    buffs: {
      strategy: 1,
      alchemy: 1,
      healing: 1,
      magicResistance: 1,
    },
  };
  farmboyBuffs = {
    startingBuffPoints: 20,
    buffs: {
      strategy: 1,
      handToHand: 1,
      climbing: 1,
      loyalty: 1,
    },
  };
  maidenBuffs = {
    startingBuffPoints: 20,
    buffs: {
      diplomacy: 1,
      willpower: 1,
      luck: 1,
      persuasion: 1,
    },
  };
  princeBuffs = {
    startingBuffPoints: 20,
    buffs: {
      hunting: 1,
      tracking: 1,
      authoriy: 1,
      deception: 1,
    },
  };
  startingBuffPoints = 0;
  startingTraits = {
    intelligence: 1,
    will: 1,
    strength: 1,
    agility: 1,
    charisma: 1,
  }
  private _buffs: Record<string, number> = {};

  get buffs(): Record<string, number> {
    return this._buffs;
  }

  getCharacter(userId: string): Observable<Pirate | SwordMaster | Brute | Brainiac | Wizard | Farmboy | Maiden | Prince> {
    return this._client.post(`/api/character`, userId).pipe(
      catchError(() => of(this.character)),
      map(() => this.character)
    );
  }

  balanceCharacterPoints(traits: FormGroup): void {
    const unevenPoints = this._totalTraitPoints % 5;
    let balancedPoints = unevenPoints === 0 ? this._totalTraitPoints / 5 : Math.round(this._totalTraitPoints / 5);
    traits.get('will')?.setValue(balancedPoints);
    traits.get('strength')?.setValue(balancedPoints);
    traits.get('agility')?.setValue(balancedPoints);
    traits.get('charisma')?.setValue(balancedPoints);
    if(unevenPoints > 0) {
      balancedPoints += unevenPoints;
    }
    traits.get('intelligence')?.setValue(balancedPoints);
  }

  resetCharcterPoints(traits: FormGroup): void {
    traits.get('intelligence')?.setValue(this.character.intelligence);
    traits.get('will')?.setValue(this.character.will);
    traits.get('strength')?.setValue(this.character.strength);
    traits.get('agility')?.setValue(this.character.agility);
    traits.get('charisma')?.setValue(this.character.charisma);
  }

  calculatePointsRemaining(traits: FormGroup): number {
    let count = 0;
    count += traits.get('intelligence')?.value ?? 0;
    count += traits.get('will')?.value ?? 0;
    count += traits.get('strength')?.value ?? 0;
    count += traits.get('agility')?.value ?? 0;
    count += traits.get('charisma')?.value ?? 0;
    return this._totalTraitPoints - count;
  }

  levelUpCharacter(level: number): void {
    const existingPoints = this.totalCharacterTraitPoints();
    const levelPoints = (level >= 2 && level <= 51) ? 5 :
      (level >= 52 && level <= 82) ? 4 : 3
    ;
    this._totalTraitPoints = existingPoints + levelPoints;
  }

  totalCharacterTraitPoints(): number {
    return this.character.agility + this.character.intelligence + this.character.strength + this.character.will + this.character.charisma;
  }

  setBuffs(type: string): void {
    switch (type) {
      case 'Pirate':
        this.startingBuffPoints = this.pirateBuffs.startingBuffPoints;
        this._buffs = this.pirateBuffs.buffs;
        break;
      case 'Sword Master':
        this.startingBuffPoints = this.swordMasterBuffs.startingBuffPoints;
        this._buffs = this.swordMasterBuffs.buffs;
        break;
      case 'Brute':
        this.startingBuffPoints = this.bruteBuffs.startingBuffPoints;
        this._buffs = this.bruteBuffs.buffs;
        break;
      case 'Brainiac':
        this.startingBuffPoints = this.brainiacBuffs.startingBuffPoints;
        this._buffs = this.brainiacBuffs.buffs;
        break;
      case 'Wizard':
        this.startingBuffPoints = this.wizardBuffs.startingBuffPoints;
        this._buffs = this.wizardBuffs.buffs;
        break;
      case 'Maiden':
        this.startingBuffPoints = this.maidenBuffs.startingBuffPoints;
        this._buffs = this.maidenBuffs.buffs;
        break;
      case 'Prince':
        this.startingBuffPoints = this.princeBuffs.startingBuffPoints;
        this._buffs = this.princeBuffs.buffs;
        break;
      default:
        this.startingBuffPoints = this.farmboyBuffs.startingBuffPoints;
        this._buffs = this.farmboyBuffs.buffs;
        break;
    }
  }

  calculateBuffPointsRemaining(maxPoints: number): number {
    const keys = Object.keys(this.buffs);
    let count = 0;
    for(const key of keys) {
      count += this.buffs[key] ?? 0;
    }
    return maxPoints - count;
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
}
