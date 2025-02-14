const { createApp } = Vue;
createApp({
    data() {
        return {
            interval: 500,
            minValue: 1,
            maxValue: 300,
            numCount: 5,
            numbers: [],
            currentNumber: null,
            userAnswer: '',
            result: null,
            showNumber: false,
            playing: false,
            isFirst: true,
        };
    },
    methods: {
        startGame() {
            this.numbers = Array.from({ length: this.numCount }, () => 
                Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue
            );
            this.userAnswer = '';
            this.result = null;
            this.playing = true;
            this.isFirst = false;
            this.showNumbers(0);
        },
        showNumbers(index) {
            if (index < this.numbers.length) {
                this.showNumber = true;
                this.currentNumber = this.numbers[index];
                setTimeout(() => {
                    this.showNumber = false;
                    setTimeout(() => {
                        this.showNumbers(index + 1);
                    }, 100);
                }, this.interval);
            } else {
                this.playing = false;
            }
        },
        checkAnswer() {
            if (!this.isFirst)
            {
                const sum = this.numbers.reduce((a, b) => a + b, 0);
                this.result = parseInt(this.userAnswer) === sum ? '正解!' : '不正解...\n答え: ' + sum;
            }
        }
    }
}).mount('#app');