/**
 * Utility type to generate a union of numbers from 0 to N-1
 */
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

/**
 * Utility type to generate a union of numbers from F to T-1
 */
export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

/**
 * A type representing a whole number between 0 and 100 (inclusive)
 */
export type Percentage = IntRange<0, 101>;

/**
 * A branded type representing a value between 1 and 1000.
 * Branded types are used for large ranges where literal unions (like Percentage)
 * would exceed TypeScript's recursion limit.
 */
export type Value = number & { readonly __brand: unique symbol };

/**
 * Type guard/constructor for the Value type
 */
export function toValue(n: number): Value {
  if (n >= 1 && n <= 1000 && Number.isInteger(n)) {
    return n as Value;
  }
  throw new Error('Value must be an integer between 1 and 1000');
}

export type DamageOverTime = 'Bleed' | 'Poison' | 'Burn';

export type CrowdControl = 'Stun' | 'Freeze' | 'Slow' | 'Blind' | 'Knockback';

export type StatModifier = 'Sunder' | 'Weaken' | 'Silence' | 'Vulnerability';

export type Utility = 'LifeSteal' | 'Culling' | 'Cleave' | 'Haste';

export type WeaponEffect = DamageOverTime | CrowdControl | StatModifier | Utility;

export type FoodEffect = 'WellFed' | 'Hydrated' | 'Energized' | 'Nauseated' | 'Drunk' | 'Regeneration';

export type ArmorEffect = 'Thorns' | 'Fortify' | 'Ward' | 'Unstoppable'
  | 'Featherweight' | 'Mending' | 'ShadowStep'
  | 'Might' | 'Grace' | 'Wisdom';

export type MedicineEffect = 'PainRelief' | 'Antidote' | 'Stimulated' | 'ImmuneBoost' | 'Clarity';

export type DamageType = 'Slashing' | 'Piercing' | 'Bludgeoning' | 'Magical' | 'True';

export interface EffectInstance {
  type: WeaponEffect | FoodEffect | ArmorEffect | MedicineEffect;
  magnitude: number;
  chance: Percentage;
  duration?: number;
}
