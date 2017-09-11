class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.floor((this.max + this.min) / 2);
        return this.result;
    }

    lower() {
        this.max = this.result - 1;
    }

    greater() {
        this.min = this.result + 1;
    }
}

module.exports = GuessingGame;
