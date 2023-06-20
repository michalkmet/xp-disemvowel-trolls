const disemvowel = require('./disemvowel-trolls');

describe('disemvowel trolls', () => {
  it('given lol should return ll', () => {
    expect(disemvowel('lol')).toBe('ll');
  });
  it('given gggrrrr should return gggrrrr', () => {
    expect(disemvowel('gggrrrr')).toBe('gggrrrr');
  });
  it('given "This website is for losers LOL!" should return "Ths wbst s fr lsrs LL!"', () => {
    expect(disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!');
  });
  it('given "No offense but,\nYour writing is among the worst I\'ve ever read" should return "N ffns bt,\nYr wrtng s mng th wrst \'v vr rd"', () => {
    expect(disemvowel('No offense but,\nYour writing is among the worst I\'ve ever read')).toBe('N ffns bt,\nYr wrtng s mng th wrst \'v vr rd');
  });
});
