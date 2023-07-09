    new Vue({
        el: '#desafio',
        data: {
            nome: 'Henrique',
            idade: 21,
            imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
        },
        methods: {
                idadeVezes3() {
                    return this.idade * 3
                },
                random() {
                    return Math.random()
                },
            }
    })