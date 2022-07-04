import { Greeter } from "../index";

test('My Greeter', () => {
    expect(Greeter('OKEX')).toBe('There will OKEX API client');
})