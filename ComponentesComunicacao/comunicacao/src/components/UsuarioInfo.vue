<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            //required: true,
            //default: function() {
                //return Array(10).fill(0).join(',');
            //}
            default: 'Anonimo',
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('');
        },
        reiniciarNome() {
            const antigo = this.nome
            this.nome = 'Pedro'
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo
                });
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
