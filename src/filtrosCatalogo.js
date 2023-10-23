const catalagoProdutos = document.getElementById('container-produto');

function exibitTodos() {
    const produtosEscondidos = Array.from(catalagoProdutos.getElementsByClassName('hidden'));

    for(const produto of produtosEscondidos){
        produto.classList.remove('hidden');
    }
}


function esconderMasculinos() {
    exibitTodos()
    const produtosMasculinos = Array.from(catalagoProdutos.getElementsByClassName("masculino"));

    for(const produto of produtosMasculinos){
        produto.classList.add('hidden');
    }
}

function esconderFemininos() {
    exibitTodos()
    const produtosFemininos = Array.from(catalagoProdutos.getElementsByClassName("feminino"));

    for(const produto of produtosFemininos){
        produto.classList.add('hidden');
    }
}

export function inicializarFiltros(){
    document.getElementById('exibir-todos').addEventListener('click', exibitTodos);
    document.getElementById('exibir-masculinos').addEventListener('click', esconderFemininos);
    document.getElementById('exibir-femininos').addEventListener('click', esconderMasculinos);
}