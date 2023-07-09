new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('estou te alertando')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})