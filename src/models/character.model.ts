export interface Character {
  biography: string;
  class: 'Pirate' | 'Sword Master' | 'Brute' | 'Brainiac' | 'Wizard' | 'Farmboy' | 'Maiden' | 'Prince';
  life: number;
  name: string;
}

export interface Pirate extends Character {}

export interface SwordMaster extends Character {}

export interface Brute extends Character {}

export interface Brainiac extends Character {}

export interface Wizard extends Character {}

export interface Farmboy extends Character {}

export interface Maiden extends Character {}

export interface Prince extends Character {}
