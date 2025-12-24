import { Percentage } from "./types.model";

export interface Character {
  id: string;
  biography: string;
  type: 'Pirate' | 'Sword Master' | 'Brute' | 'Brainiac' | 'Wizard' | 'Farmboy' | 'Maiden' | 'Prince';
  life: number;
  intelligence: Percentage,
  will: Percentage,
  strength: Percentage,
  agility: Percentage,
  charisma: Percentage,
  name: string;
}

export interface Pirate extends Character {
  type: 'Pirate',
  buffs: {
    handToHand?: Percentage,
    fencing?: Percentage,
    strategy?: Percentage,
    leadership?: Percentage,
    intimidation?: Percentage,
  },
}

export interface SwordMaster extends Character {
  type: 'Sword Master',
  buffs: {
    fencing?: Percentage,
    parryChance?: Percentage,
    precision?: Percentage,
    counterAttack?: Percentage,
  }
}

export interface Brute extends Character {
  type: 'Brute',
  buffs: {
    handToHand?: Percentage,
    durability?: Percentage,
    carryingCapacity?: Percentage,
    intimidation?: Percentage,
  }
}

export interface Brainiac extends Character {
  type: 'Brainiac',
  buffs: {
    strategy?: Percentage,
    poisonResistance?: Percentage,
    wit?: Percentage,
    deception?: Percentage,
  }
}

export interface Wizard extends Character {
  type: 'Wizard',
  buffs: {
    strategy?: Percentage,
    alchemy?: Percentage,
    healing?: Percentage,
    magicResistance?: Percentage,
  }
}

export interface Farmboy extends Character {
  type: 'Farmboy',
  buffs: {
    strategy?: Percentage,
    handToHand?: Percentage,
    climbing?: Percentage,
    loyalty?: Percentage,
  }
}

export interface Maiden extends Character {
  type: 'Maiden',
  buffs: {
    diplomacy?: Percentage,
    willpower?: Percentage,
    luck?: Percentage,
    persuasion?: Percentage,
  }
}

export interface Prince extends Character {
  type: 'Prince',
  buffs: {
    hunting?: Percentage,
    tracking?: Percentage,
    authority?: Percentage,
    deception?: Percentage,
  }
}
