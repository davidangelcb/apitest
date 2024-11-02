import axios from "axios";
const url = process.env.URL_SWAPI; 
const model = "planets";

const planetsRepository = {
    getAll: async (searchLink, pagination ) => {
        const link = `${url}/${model}/${searchLink}${pagination}`;
        
        return await axios.get(link);   
    },
    getById: async (id) => {
        const link = `${url}/${model}/${id}`;
        
        return await axios.get(link);
    }
};

export default planetsRepository;
