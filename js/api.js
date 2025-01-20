const URL_BASE = "http://localhost:3000"

const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`);
            return await response.json();
        } catch (error) {
            alert(`Erro ao buscar pensamentos \r\n${error}`);
            throw error;
        }
    },

    async salvarPensamentos(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            alert(`Erro ao salvar pensamentos \r\n${error}`);
            throw error;
        }
    }, 

    async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`);
            return await response.json();
        } catch (error) {
            alert(`Erro ao buscar pensamento \r\n${error}`);
            throw error;
        }
    },

    async editarPensamentos(pensamento) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            });
            return await response.json();
        } catch (error) {
            alert(`Erro ao salvar pensamento \r\n${error}`);
            throw error;
        }
    }, 
    async excluirPensamentos(id) {
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
                method: "DELETE"
            });
        } catch (error) {
            alert(`Erro ao excluir pensamento \r\n${error}`);
            throw error;
        }
    }, 

}
export default api;