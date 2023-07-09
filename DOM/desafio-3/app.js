new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed: {
        resultado() {
            console.log('metodo computed resultado chamado ...')
               return this.valor == 37 ? 'Valor Igual a 37' : ' Valor Diferente de 37'
         },
     },
    watch: {
        valor(novo, antigo){
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    },
});