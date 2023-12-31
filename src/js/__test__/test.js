import orderByProps from '../app';

const obj = {
  name: 'swordsmen',
  health: 10,
  level: 2,
  attack: 80,
  deffence: 40,
};

test('object sorting', () => {
  const arr = ['name', 'level'];
  const result = [
    { key: 'name', value: 'swordsmen' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'deffence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, arr)).toEqual(result);
});

test('sort object if second object is empty', () => {
  const arr = [];
  const result = [
    { key: 'attack', value: 80 },
    { key: 'deffence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'swordsmen' },
  ];
  expect(orderByProps(obj, arr)).toEqual(result);
});
