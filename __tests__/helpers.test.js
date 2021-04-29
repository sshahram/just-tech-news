const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-04-28 23:45:03');

    expect(format_date(date)).toBe('4/28/2021');
});