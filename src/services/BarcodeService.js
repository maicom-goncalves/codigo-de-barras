import axios from 'axios';

export default class ListaService {
    constructor() {
        this.api = axios.create({
            baseURL: ''
        });   
    }

    async salvar(result) {
        console.log(result+" teste");
        await this.api.post('/', result);
        
    }
   /* async atualizar(result) {
        await this.api.put(`/${result}`);

    }*/
}






