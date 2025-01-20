const URL_BASE = "http://localhost:3000"

const api = {
    async buscarPensamentos() {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos`);
            return await response.data;
        } catch (error) {
            alert(`Erro ao buscar pensamentos \r\n${error}`);
            throw error;
        }
    },

    async salvarPensamentos(pensamento) {
        try {
            const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento)
            return await response.data
        } catch (error) {
            alert(`Erro ao salvar pensamentos \r\n${error}`);
            throw error;
        }
    }, 

    async buscarPensamentoPorId(id) {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
            return await response.data;
        } catch (error) {
            alert(`Erro ao buscar pensamento \r\n${error}`);
            throw error;
        }
    },

    async editarPensamentos(pensamento) {
        try {
            const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento);
            return await response.data;
        } catch (error) {
            alert(`Erro ao salvar pensamento \r\n${error}`);
            throw error;
        }
    }, 
    async excluirPensamentos(id) {
        try {
            const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`);
        } catch (error) {
            alert(`Erro ao excluir pensamento \r\n${error}`);
            throw error;
        }
    }, 

}
export default api;