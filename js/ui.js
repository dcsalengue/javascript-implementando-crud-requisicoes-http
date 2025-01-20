import api from "./api.js"
const ui = {
    limparFormulario() {
        document.getElementById("pensamento-form").reset();
    },
    async renderizarPensamentos() {
        const listaPensamentos = document.querySelector('#lista-pensamentos')

        try {
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(this.adicionarPensamentoNaLista)


        } catch (error) {
            console.log(error);
            throw (error);
        }
    },
    async adicionarPensamentoNaLista(pensamento) {
        const listaPensamentos = document.querySelector('#lista-pensamentos');
        const li = document.createElement("li");
        li.setAttribute("data-id", pensamento.id);
        li.classList.add("li-pensamento");

        const iconeAspas = document.createElement("img");
        iconeAspas.setAttribute("src", "assets/imagens/aspas-azuis.png");
        iconeAspas.setAttribute("alt", "Aspas azuis");
        iconeAspas.classList.add("icone-aspas");

        const pensamentoConteudo = document.createElement("div");
        pensamentoConteudo.classList.add("pensamento-conteudo");
        pensamentoConteudo.textContent = ` ${pensamento.conteudo}`;

        const pensamentoAutoria = document.createElement("div");
        pensamentoAutoria.classList.add("pensamento-autoria");
        pensamentoAutoria.textContent = ` ${pensamento.autoria}`;

        li.appendChild(iconeAspas);
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        listaPensamentos.appendChild(li);

    }

}
export default ui;