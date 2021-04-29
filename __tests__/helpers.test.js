const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-04-28 23:45:03');

    expect(format_date(date)).toBe('4/28/2021');
});

test('format_plural() returns a pluralized word', () => {
    const word1 = format_plural('tiger', 1);
    const word2 = format_plural('lion', 2);
  
    expect(word1).toBe('tiger');
    expect(word2).toBe('lions');
  });
  