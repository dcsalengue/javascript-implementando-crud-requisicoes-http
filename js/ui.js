import api from "./api.js"
const ui = {
    limparFormulario() {
        document.getElementById("pensamento-form").reset();
    },

    async preencherFormulario(pensamentoId) {
        const pensamento = await api.buscarPensamentoPorId(pensamentoId);
        document.getElementById("pensamento-id").value = pensamento.id;
        document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
        document.getElementById("pensamento-autoria").value = pensamento.autoria;

        document.getElementById("pensamento-conteudo").focus();
        document.getElementById("pensamento-conteudo").select()
    },

    async renderizarPensamentos() {
        const listaPensamentos = document.querySelector('#lista-pensamentos');
        listaPensamentos.innerHTML = ""
        
        try {
            const pensamentos = await api.buscarPensamentos();
            if (pensamentos.length) {
                pensamentos.forEach(this.adicionarPensamentoNaLista)
            }
            else {
                ui.mensagemListaVazia()
                console.log("Sem pensamentos")
            }
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

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");
        botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id);

        const iconeEditar = document.createElement("img");
        iconeEditar.src = "assets/imagens/icone-editar.png";
        iconeEditar.alt = "Editar";
        botaoEditar.appendChild(iconeEditar);

        const botaoExcluir = document.createElement("button");
        botaoExcluir.classList.add("botao-excluir");
        botaoExcluir.onclick = async () => {
            try {
                api.excluirPensamentos(pensamento.id);
                ui.renderizarPensamentos()
            } catch (error) {
                alert('Erro ao excluir pensamento')
            }

        }

        const iconeExcluir = document.createElement("img");
        iconeExcluir.src = "assets/imagens/icone-excluir.png";
        iconeExcluir.alt = "Excluir";
        botaoExcluir.appendChild(iconeExcluir);

        const icones = document.createElement("div");
        icones.classList.add("icones");
        icones.appendChild(botaoEditar);
        icones.appendChild(botaoExcluir);

        li.appendChild(iconeAspas);
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        li.appendChild(icones)
        listaPensamentos.appendChild(li);




    },

    mensagemListaVazia() {
        const listaPensamentos = document.querySelector('#lista-pensamentos');
        
        const containerListaVazia = document.createElement("div");
        containerListaVazia.style.width = "100vh"
        containerListaVazia.style.display ="flex"
        containerListaVazia.style.gap = "2rem"
        containerListaVazia.style.textAlign = "center"
        containerListaVazia.style.alignItems = "center"
        containerListaVazia.style.flexDirection ="column"
        
        const textoListaVazia = document.createElement("p");
        textoListaVazia.textContent = "Nada por aqui ainda, que tal compartilhar alguma ideia?"

        const imagemListaVazia = document.createElement("img");
        imagemListaVazia.src = "./assets/imagens/lista-vazia.png"
        imagemListaVazia.alt = "lista vazia"

        containerListaVazia.appendChild(textoListaVazia);
        containerListaVazia.appendChild(imagemListaVazia);

        listaPensamentos.appendChild(containerListaVazia);

    }

}
export default ui;