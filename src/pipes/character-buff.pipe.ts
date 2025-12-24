import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterBuff'
})
export class CharacterBuffPipe implements PipeTransform {

  transform(value: unknown): unknown {
    switch (value) {
      case 'handToHand':
        return 'Hand To Hand Combat';
      case 'climbing':
        return 'Climbing';
      case 'loyalty':
        return 'Loyalty';
      case 'fencing':
        return 'Fencing';
      case 'strategy':
        return 'Strategy';
      case 'leadership':
        return 'Leadership';
      case 'parryChange':
        return 'Parry Chance';
      case 'precision':
        return 'Precision';
      case 'counterAttack':
        return 'Counter Attack';
      case 'durability':
        return 'Durability';
      case 'carryingCapacity':
        return 'Carrying Capacity';
      case 'intimidation':
        return 'Intimidation';
      case 'poisonResistance':
        return 'Posion Resistance';
      case 'wit':
        return 'Wit';
      case 'deception':
        return 'Deception';
      case 'alchemy':
        return 'Alchemy';
      case 'healing':
        return 'Healing';
      case 'magicResistance':
        return 'Magic Resistance';
      case 'diplomacy':
        return 'Diplomacy';
      case 'willpower':
        return 'Will Power';
      case 'luck':
        return 'Luck';
      case 'persuasion':
        return 'Persuasion';
      case 'hunting':
        return 'Hunting';
      case 'tracking':
        return 'Tracking';
      case 'authority':
        return 'Authority';
      default:
        return 'Unknown Buff';
    }
    return null;
  }

}
