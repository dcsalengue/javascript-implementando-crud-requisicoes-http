const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos');
            return await response.json();
        } catch (error) {
            alert(`Erro ao buscar pensamentos \r\n${error}`);
            throw error;
        }
    },

    async salvarPensamentos(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
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
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`);
            return await response.json();
        } catch (error) {
            alert(`Erro ao buscar pensamento \r\n${error}`);
            throw error;
        }
    },

    async editarPensamentos(pensamento) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
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

}
export default api;