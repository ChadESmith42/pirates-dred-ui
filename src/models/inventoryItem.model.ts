import { CrowdControl, DamageOverTime, DamageType, EffectInstance, Percentage, Value } from './types.model';

export interface InventoryItem {
  id: string,
  name: string,
  description?: string,
  type: 'Food' | 'Weapon' | 'Medicine' | 'Clothing' | 'Armor' | 'Magical',
  durability: Percentage,
  value: Value,
}

export interface Food extends InventoryItem {
  type: 'Food',
  taste: Percentage,
  nuitrition: Percentage,
  restoration: {
    healthRestored: Percentage,
    staminaRestored: Percentage,
    hungerSatisfied: Percentage,
  },
  shelfStable: {
    isPerishable: boolean,
    freshness: Percentage,
    isCooked: boolean,
  },
  consumption: {
    consumptionDuration: number,
    servings: number,
  },
  buffs: EffectInstance[],
  effects: {
    isIntoxicating: boolean,
    causesFlatulence: boolean,
    causesBadBreath: boolean,
    foodPoisoningChance?: Percentage,
  }
}

export interface Weapon extends InventoryItem {
  type: 'Weapon',
  minBaseDamage: Value,
  maxBaseDamage: Value,
  damageType: DamageType,
  attackSpeed: Percentage,
  criticalChance: Percentage,
  range: 'Melee' | 'Ranged',
  handedNess: 'One' | 'Two',
  requirements: {
    minStrength?: Percentage,
    minAgility?: Percentage,
    minIntelligence?: Percentage,
  },
  scaling: {
    strength?: Percentage,
    agility?: Percentage,
    intelligence?: Percentage,
  },
  rarity: 'Common' | 'Rare' | 'Legendary' | 'Artifact',
  specialEffects: EffectInstance[]
}

export interface Armor extends InventoryItem {
  type: 'Armor',
  defense: Value,
  armorType: 'Light' | 'Medium' | 'Heavy',
  slot: 'Head' | 'Chest' | 'Legs' | 'Hands' | 'Feet' | 'Shield',
  resistances: Partial<Record<DamageType, Percentage>>,
  requirements: {
    minStrength?: Percentage,
    minAgility?: Percentage,
    minIntelligence?: Percentage,
  },
  penalties: {
    movementPenalty?: Percentage,
    stealthPenalty?: Percentage,
  },
  rarity: 'Common' | 'Rare' | 'Legendary' | 'Artifact',
  specialEffects: EffectInstance[]
}

export interface Medicine extends InventoryItem {
  type: 'Medicine',
  restoration: {
    healthRestored?: Value,
    staminaRestored?: Value,
    willRestored?: Value,
  },
  cures: (DamageOverTime | CrowdControl)[],
  toxicity: Percentage,
  application: {
    method: 'Oral' | 'Topical' | 'Injected',
    duration: number,
    servings: number,
  },
  rarity: 'Common' | 'Rare' | 'Legendary' | 'Artifact',
  buffs: EffectInstance[],
}

export interface Clothing extends InventoryItem {
  type: 'Clothing',
  slot: 'Head' | 'Chest' | 'Legs' | 'Hands' | 'Feet' | 'Back' | 'FullBody',
  style: 'Ragged' | 'Common' | 'Formal' | 'Pirate' | 'Noble',
  minorDefense: Percentage,
  comfort: Percentage,
  weatherProtection: {
    cold?: Percentage,
    heat?: Percentage,
    isWaterProof?: boolean,
  },
  isDyeable: boolean,
  isRepairable: boolean,
}

export interface Magical extends InventoryItem {
  type: 'Magical',
  magicType: 'Arcane' | 'Divine' | 'Nature' | 'Necrotic' | 'Eldritch',
  charges?: {
    current: number,
    max: number,
    rechargeRate: 'None' | 'Daily' | 'OnKill' | 'Passive',
  },
  willCost?: number,
  spellEffect: EffectInstance[],
  requiresAttunement: boolean,
  rarity: 'Common' | 'Rare' | 'Legendary' | 'Artifact',
}

