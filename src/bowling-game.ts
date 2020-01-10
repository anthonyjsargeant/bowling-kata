export class BowlingGame {
    private totalScore: number;

    constructor() {
        this.totalScore = 0;
    }

    public roll(pins: number) {
        this.totalScore += pins;
    }

    public score(): number {
        return this.totalScore;
    }
}
