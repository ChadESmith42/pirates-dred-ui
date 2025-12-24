import { CharacterBuffPipe } from './character-buff.pipe';

describe('CharacterBuffPipe', () => {
  it('transforms the buff "handToHand" to "Hand To Hand Combat"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'handToHand';
    const expectedOutput = 'Hand To Hand Combat';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "climbing" to "Climbing"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'climbing';
    const expectedOutput = 'Climbing';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "loyalty" to "Loyalty"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'loyalty';
    const expectedOutput = 'Loyalty';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "fencing" to "Fencing"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'fencing';
    const expectedOutput = 'Fencing';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "strategy" to "Strategy"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'strategy';
    const expectedOutput = 'Strategy';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "leadership" to "Leadership"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'leadership';
    const expectedOutput = 'Leadership';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "parryChange" to "Parry Chance"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'parryChange';
    const expectedOutput = 'Parry Chance';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "precision" to "Precision"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'precision';
    const expectedOutput = 'Precision';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "counterAttack" to "Counter Attack"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'counterAttack';
    const expectedOutput = 'Counter Attack';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "durability" to "Durability"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'durability';
    const expectedOutput = 'Durability';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "carryingCapacity" to "Carrying Capacity"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'carryingCapacity';
    const expectedOutput = 'Carrying Capacity';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "intimidation" to "Intimidation"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'intimidation';
    const expectedOutput = 'Intimidation';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "poisonResistance" to "Posion Resistance"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'poisonResistance';
    const expectedOutput = 'Posion Resistance';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "wit" to "Wit"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'wit';
    const expectedOutput = 'Wit';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "deception" to "Deception"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'deception';
    const expectedOutput = 'Deception';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "alchemy" to "Alchemy"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'alchemy';
    const expectedOutput = 'Alchemy';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "healing" to "Healing"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'healing';
    const expectedOutput = 'Healing';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "magicResistance" to "Magic Resistance"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'magicResistance';
    const expectedOutput = 'Magic Resistance';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "diplomacy" to "Diplomacy"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'diplomacy';
    const expectedOutput = 'Diplomacy';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "willpower" to "Will Power"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'willpower';
    const expectedOutput = 'Will Power';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "luck" to "Luck"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'luck';
    const expectedOutput = 'Luck';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "persuasion" to "Persuasion"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'persuasion';
    const expectedOutput = 'Persuasion';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "hunting" to "Hunting"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'hunting';
    const expectedOutput = 'Hunting';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "tracking" to "Tracking"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'tracking';
    const expectedOutput = 'Tracking';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms the buff "authority" to "Authority"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'authority';
    const expectedOutput = 'Authority';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });

  it('transforms an unknown buff to "Unknown Buff"', () => {
    const pipe = new CharacterBuffPipe();
    const input = 'unknownBuff';
    const expectedOutput = 'Unknown Buff';

    expect(pipe.transform(input)).toBe(expectedOutput);
  });
});
