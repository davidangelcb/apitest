import { translateKeys } from "./../utils/utils.js";
import axios from "axios";

const url = "https://swapi.py4e.com/api"; 
const swapiService = {
  getDataBymodel: async (model, id) => {
    try {
      const link = `${url}/${model}/${id}`;
      const response = await axios.get(link);
      const data = response.data;
      const dataTranslated = translateKeys(model, data);
      return dataTranslated;
    } catch (error) {
      //console.log(error);
      return null;
    }
  },
  getData: async (model, page, search) => {
    try {

      let searchLink = "";
      if (search != "") {
        searchLink = `?search=${search}`;
      }

      let pagination = "";
      if (page > 1) {
         pagination = (search=='') ? `?page=${page}` : `&page=${page}`;
        ;
      }

      const link = `${url}/${model}/${searchLink}${pagination}`;
      console.log(link);
      const response = await axios.get(link);

      if (response.data.count == 0) {
        return null;
      }
      let next = null;
      let previous = null;
      if (response.data.next != null) {
        const words = response.data.next.split("?");
        next = words[1];
      }
      if (response.data.previous != null) {
        const words = response.data.previous.split("?");
        previous = words[1];
      }
      const reply = {
        count: response.data.count,
        countInPage: response.data.results.length,
        next: next,
        previous: previous,
        items: response.data.results,
      };

      return reply;
    } catch (error) {
      //console.log(error);
      return null;
    }
  },
};

export default swapiService;
