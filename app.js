new Vue({
    data: function () {
        return {
            hex: '',
            show: false,
            history: [],
        }
    },
    methods: {
        // Muda as cores
        changeColor() {
            this.hex = this.randomColor();
            this.history.push(this.hex);
            this.$refs['bg'].style.backgroundColor = this.hex;
        },
        // Gera uma cor aleatória
        randomColor() {
            /**
             * Um algorítimo que gera uma string de 6
             * caracteres, com números de 0 a 9 e letras
             * de A a F.
             */
            let newHex = ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0').toUpperCase();
            return `#${newHex}`;
        }
    },
    mounted: function () {
        this.changeColor();
    }
}).$mount('#background');