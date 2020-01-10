import {BowlingGame} from "../src/bowling-game";

let game;

beforeEach(() => {
    game = new BowlingGame();
});

test('a gutter game', () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
});

test('a game scoring only ones', () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
});

function rollMany(number: number, pins: number) {
    for (let i = 0; i < number; i++) {
        game.roll(pins);
    }
}
